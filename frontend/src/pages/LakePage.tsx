import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { waterBodies } from '../data/waterBodies';
import TimeSpanSelector from '../components/TimeSpanSelector';
import { subDays, subMonths, subYears, format, parseISO } from 'date-fns';

// 1. Define interfaces matching the new API structure
interface PredictionItem {
  "TSS mg/L": number;
  "Turbidity NTU": number;
  "Chlorophyll ug/L": number;
  "date": string;
  "NDVI": number;
  "NDWI": number;
}

interface APIResponse {
  predictions: PredictionItem[];
}

// Interface for our internal normalized data (easier for Recharts to handle)
interface NormalizedDataPoint {
  date: string;
  turbidity: number;
  tss: number;
  chlorophyll: number;
  ndvi: number;
  ndwi: number;
}

export default function LakePage() {
  const { name } = useParams();
  const [timeSpan, setTimeSpan] = useState('1M');
  
  // State for chart data and current readings
  const [chartData, setChartData] = useState<NormalizedDataPoint[]>([]);
  const [currentReading, setCurrentReading] = useState<NormalizedDataPoint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lake = waterBodies.find(
    (body) => body.name.toLowerCase() === decodeURIComponent(name || '')
  );

  useEffect(() => {
    if (!lake) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      // 2. Calculate dates based on timeSpan
      const today = new Date();
      let startDate = new Date();
      
      switch (timeSpan) {
        case '1W': startDate = subDays(today, 20); break;
        case '1M': startDate = subMonths(today, 1); break;
        case '6M': startDate = subMonths(today, 6); break;
        case '1Y': startDate = subYears(today, 1); break;
        default: startDate = subMonths(today, 1);
      }

      const formattedStartDate = format(startDate, 'yyyy-MM-dd');
      const formattedEndDate = format(today, 'yyyy-MM-dd');

      try {
        // 3. Call the new /predict endpoint
        const response = await fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            coordinates: lake.coordinates,
            start_date: formattedStartDate,
            end_date: formattedEndDate
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch prediction data');
        }

        const data: APIResponse = await response.json();

        // 4. Transform API data to normalized format for the Chart
        // We map the complex keys ("Turbidity NTU") to simple keys ("turbidity")
        const normalizedData: NormalizedDataPoint[] = (data.predictions || []).map(item => ({
          date: item.date,
          turbidity: item["Turbidity NTU"],
          tss: item["TSS mg/L"],
          chlorophyll: item["Chlorophyll ug/L"],
          ndvi: item["NDVI"],
          ndwi: item["NDWI"]
        }));

        setChartData(normalizedData);

        // 5. Set current reading using the FIRST element (predictions[0]) as requested
        if (normalizedData.length > 0) {
          setCurrentReading(normalizedData[0]);
        } else {
          setCurrentReading(null);
        }

      } catch (err) {
        console.error(err);
        setError('Unable to load water quality data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lake, timeSpan]); // Re-fetch when lake OR timeSpan changes

  if (!lake) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Water body not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{lake.name}</h1>
        <p className="mt-2 text-gray-600">Location: {lake.location}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Area</p>
              <p className="text-xl font-medium">{lake.area} hectares</p>
            </div>
            {/* Added optional chaining for properties that might not exist in your types yet */}
            {/* <div>
              <p className="text-sm text-gray-500">Depth</p>
              <p className="text-xl font-medium">{lake.depth || 'N/A'} meters</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Water Level</p>
              <p className="text-xl font-medium">{lake.waterLevel || 'N/A'}%</p>
            </div> */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Water Quality Trends</h3>
            <TimeSpanSelector selectedSpan={timeSpan} onSpanChange={setTimeSpan} />
          </div>
          <div className="h-[300px]">
             {loading ? (
                <div className="h-full flex items-center justify-center text-gray-500">Loading chart data...</div>
             ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="date"
                      tickFormatter={(date) => {
                        try { return format(parseISO(date), 'MMM d'); } 
                        catch (e) { return date; }
                      }}
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(date) => {
                        try { return format(parseISO(date as string), 'MMM d, yyyy'); } 
                        catch (e) { return date; }
                      }}
                    />
                    {/* Updated dataKeys to match the normalized data structure */}
                    <Line type="monotone" dataKey="turbidity" stroke="#ca8a04" name="Turbidity" />
                    <Line type="monotone" dataKey="tss" stroke="#7c3aed" name="TSS" />
                    <Line type="monotone" dataKey="chlorophyll" stroke="#059669" name="Chlorophyll" />
                  </LineChart>
                </ResponsiveContainer>
             )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Current Readings</h3>
            {currentReading && (
                <span className="text-sm text-gray-500">
                    Date: {currentReading.date}
                </span>
            )}
        </div>
        
        {loading ? (
             <div className="text-center py-4">Loading live data...</div>
        ) : error ? (
             <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-600">Turbidity</p>
                <p className="text-2xl font-semibold text-yellow-900">
                    {currentReading?.turbidity?.toFixed(2) || '--'} NTU
                </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-600">TSS</p>
                <p className="text-2xl font-semibold text-purple-900">
                    {currentReading?.tss?.toFixed(4) || '--'} mg/L
                </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-600">Chlorophyll</p>
                <p className="text-2xl font-semibold text-emerald-900">
                    {currentReading?.chlorophyll?.toFixed(4) || '--'} µg/L
                </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">NDVI</p>
                <p className="text-2xl font-semibold text-blue-900">
                    {currentReading?.ndvi?.toFixed(4) || '--'}
                </p>
            </div>

            <div className="p-4 bg-cyan-50 rounded-lg">
                <p className="text-sm text-cyan-600">NDWI</p>
                <p className="text-2xl font-semibold text-cyan-900">
                    {currentReading?.ndwi?.toFixed(4) || '--'}
                </p>
            </div>

            </div>
        )}
      </div>
    </div>
  );
}