import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { waterBodies } from '../data/waterBodies';
import TimeSpanSelector from '../components/TimeSpanSelector';
import { subDays, subMonths, subYears, format, parseISO } from 'date-fns';

// Define the shape of the API response based on your screenshot
interface APIResponse {
  "TSS mg/L": number;
  "Turbidity NTU": number;
  "Chlorophyll ug/L": number;
  "date": string;
  "NDVI": number;
  "NDWI": number;
}

export default function LakePage() {
  const { name } = useParams();
  const [timeSpan, setTimeSpan] = useState('1M');
  
  // State to hold the fetched data
  const [currentReadings, setCurrentReadings] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lake = waterBodies.find(
    (body) => body.name.toLowerCase() === decodeURIComponent(name || '')
  );

  // Fetch data from the API when the lake changes
  useEffect(() => {
    if (!lake) return;

    const fetchWaterQuality = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://127.0.0.1:8000/currdate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            coordinates: lake.coordinates
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch water quality data');
        }

        const data: APIResponse = await response.json();
        setCurrentReadings(data);
      } catch (err) {
        console.error(err);
        setError('Unable to load live data');
      } finally {
        setLoading(false);
      }
    };

    fetchWaterQuality();
  }, [lake]);

  // Keep the mock generator for the graph for now, 
  // as the API currently only returns a single date ("currdate").
  const generateHistoricalData = (span: string) => {
    const today = new Date();
    let startDate;
    let dataPoints;

    switch (span) {
      case '1W':
        startDate = subDays(today, 7);
        dataPoints = 7;
        break;
      case '1M':
        startDate = subMonths(today, 1);
        dataPoints = 30;
        break;
      case '6M':
        startDate = subMonths(today, 6);
        dataPoints = 180;
        break;
      case '1Y':
        startDate = subYears(today, 1);
        dataPoints = 365;
        break;
      default:
        startDate = subMonths(today, 1);
        dataPoints = 30;
    }

    return Array.from({ length: dataPoints }, (_, index) => {
      const date = subDays(today, dataPoints - 1 - index);
      return {
        date: format(date, 'yyyy-MM-dd'),
        turbidity: 8 + Math.random() * 4,
        tss: 20 + Math.random() * 10,
        chlorophyll: 2.5 + Math.random() * 1.5
      };
    });
  };

  const qualityData = useMemo(() => generateHistoricalData(timeSpan), [timeSpan]);

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
            {/* Note: 'depth' and 'waterLevel' were not in your provided waterBodies.ts 
                I have left them hardcoded or placeholders since they aren't in the data file */}
            <div>
              <p className="text-sm text-gray-500">Depth</p>
              <p className="text-xl font-medium">{lake.depth || 'N/A'} meters</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Water Level</p>
              <p className="text-xl font-medium">{lake.waterLevel || 'N/A'}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Water Quality Trends</h3>
            <TimeSpanSelector selectedSpan={timeSpan} onSpanChange={setTimeSpan} />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date"
                  tickFormatter={(date) => format(parseISO(date), 'MMM d')}
                />
                <YAxis />
                <Tooltip
                  labelFormatter={(date) => format(parseISO(date as string), 'MMM d, yyyy')}
                />
                <Line type="monotone" dataKey="turbidity" stroke="#ca8a04" name="Turbidity" />
                <Line type="monotone" dataKey="tss" stroke="#7c3aed" name="TSS" />
                <Line type="monotone" dataKey="chlorophyll" stroke="#059669" name="Chlorophyll" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Current Readings</h3>
            {currentReadings?.date && (
                <span className="text-sm text-gray-500">
                    Last Updated: {currentReadings.date}
                </span>
            )}
        </div>
        
        {loading ? (
             <div className="text-center py-4">Loading live data...</div>
        ) : error ? (
             <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-600">Turbidity</p>
                <p className="text-2xl font-semibold text-yellow-900">
                    {currentReadings?.["Turbidity NTU"]?.toFixed(2) || '--'} NTU
                </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-600">TSS</p>
                <p className="text-2xl font-semibold text-purple-900">
                    {currentReadings?.["TSS mg/L"]?.toFixed(4) || '--'} mg/L
                </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-600">Chlorophyll</p>
                <p className="text-2xl font-semibold text-emerald-900">
                    {currentReadings?.["Chlorophyll ug/L"]?.toFixed(4) || '--'} µg/L
                </p>
            </div>
            
            {/* Optional: Add Extra Cards for the new data points found in API */}
            <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">NDVI</p>
                <p className="text-2xl font-semibold text-blue-900">
                    {currentReadings?.["NDVI"]?.toFixed(4) || '--'}
                </p>
            </div>

            <div className="p-4 bg-cyan-50 rounded-lg">
                <p className="text-sm text-cyan-600">NDWI</p>
                <p className="text-2xl font-semibold text-cyan-900">
                    {currentReadings?.["NDWI"]?.toFixed(4) || '--'}
                </p>
            </div>

            </div>
        )}
      </div>
    </div>
  );
}