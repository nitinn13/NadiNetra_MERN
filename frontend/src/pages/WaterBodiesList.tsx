import React from 'react';
import { useNavigate } from 'react-router-dom';
import { waterBodies } from '../data/waterBodies';
import { Activity } from 'lucide-react';

export default function WaterBodiesList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Water Bodies</h1>
        <p className="mt-2 text-gray-600">Complete list of monitored water bodies in Delhi</p>
      </div>

      <div className="grid gap-6">
        {waterBodies.map(body => (
          <div
            key={body.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/lake/${encodeURIComponent(body.name.toLowerCase())}`)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{body.name}</h2>
                <p className="text-gray-600">{body.location}</p>
              </div>
              <div className={`p-2 rounded-full ${body.quality.ph >= 7.0 ? 'bg-green-50' : 'bg-yellow-50'}`}>
                <Activity className={`h-6 w-6 ${body.quality.ph >= 7.0 ? 'text-green-600' : 'text-yellow-600'}`} />
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-medium">{body.area} hectares</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Water Level</p>
                <p className="font-medium">{body.waterLevel}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">pH Level</p>
                <p className="font-medium">{body.quality.ph}</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date(body.lastUpdated).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}