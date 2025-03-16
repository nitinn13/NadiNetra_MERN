import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Droplets, AlertTriangle, Activity, Database } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import { waterQualityStats } from '../data/waterBodies';

const monthlyData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 72 },
  { name: 'Mar', value: 78 },
  { name: 'Apr', value: 82 },
  { name: 'May', value: 75 },
  { name: 'Jun', value: 70 },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Water Body Monitoring System</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Nadinetra is an advanced water body monitoring system that provides real-time data and analytics
          for Delhi's major water bodies. Our system helps maintain water quality and preserve these
          vital resources for future generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Water Bodies"
          value={waterQualityStats.totalBodies}
          icon={<Droplets className="h-6 w-6 text-blue-600" />}
          color="bg-blue-50"
          link="/water-bodies"
        />
        <StatsCard
          title="Average Quality"
          value={waterQualityStats.averageQuality}
          unit="%"
          icon={<Activity className="h-6 w-6 text-green-600" />}
          color="bg-green-50"
        />
        <StatsCard
          title="Critical Status"
          value={waterQualityStats.criticalBodies}
          icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
          color="bg-red-50"
          criticalLink={true}
        />
        <StatsCard
          title="Monitored Bodies"
          value={waterQualityStats.monitoredBodies}
          icon={<Database className="h-6 w-6 text-purple-600" />}
          color="bg-purple-50"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Water Quality Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <p className="text-sm text-gray-500">March {15 - i}, 2024</p>
                <p className="mt-1">Water quality parameters updated for all monitored lakes</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p>85% of monitored water bodies maintain good water quality</p>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p>Dissolved oxygen levels remain stable across most lakes</p>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p>Two water bodies require immediate attention due to declining quality</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}