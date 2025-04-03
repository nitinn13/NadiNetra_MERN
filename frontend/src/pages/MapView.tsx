import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { waterBodies } from '../data/waterBodies';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const icon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Water Bodies Map</h1>
        <p className="mt-2 text-gray-600">Interactive map showing all monitored water bodies in Delhi</p>
      </div>

      <div className="h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={11}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {waterBodies.map(body => (
            <Marker
              key={body.id}
              position={body.coordinates}
              icon={icon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{body.name}</h3>
                  <p className="text-sm text-gray-600">{body.location}</p>
                  <button
                    onClick={() => navigate(`/dashboard/lake/${encodeURIComponent(body.name.toLowerCase())}`)}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}