import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { waterBodies } from '../data/waterBodies';
import TimeSpanSelector from '../components/TimeSpanSelector';
import { subDays, subMonths, subYears, format, parseISO } from 'date-fns';

export default function LakePage() {
  const { name } = useParams();
  const [timeSpan, setTimeSpan] = useState('1M');
  
  const lake = waterBodies.find(
    (body) => body.name.toLowerCase() === decodeURIComponent(name || '')
  );

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
            <div>
              <p className="text-sm text-gray-500">Depth</p>
              <p className="text-xl font-medium">{lake.depth} meters</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Water Level</p>
              <p className="text-xl font-medium">{lake.waterLevel}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Water Quality Parameters</h3>
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
        <h3 className="text-lg font-semibold mb-4">Current Readings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          
          
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600">Turbidity</p>
            <p className="text-2xl font-semibold text-yellow-900">{lake.quality.turbidity} NTU</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-600">TSS</p>
            <p className="text-2xl font-semibold text-purple-900">{lake.quality.tss} mg/L</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <p className="text-sm text-emerald-600">Chlorophyll</p>
            <p className="text-2xl font-semibold text-emerald-900">{lake.quality.chlorophyll} µg/L</p>
          </div>
        </div>
      </div>
    </div>
  );
}