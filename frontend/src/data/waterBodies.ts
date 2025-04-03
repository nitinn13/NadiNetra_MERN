import { WaterBody, WaterQualityStats } from '../types';

export const waterBodies: WaterBody[] = [
  {
    id: '1',
    name: 'Bhalswa Lake',
    location: 'North Delhi',
    area: 34,
    depth: 8.5,
    quality: {
      ph: 7.2,
      dissolvedOxygen: 6.8,
      turbidity: 12,
      tds: 450,
      tss: 25,
      chlorophyll: 3.2
    },
    waterLevel: 85,
    lastUpdated: '2024-03-15T10:30:00Z',
    coordinates: [28.7357, 77.1674]
  },
  {
    id: '2',
    name: 'DTU Lake',
    location: 'Northwest Delhi',
    area: 12,
    depth: 4.2,
    quality: {
      ph: 7.5,
      dissolvedOxygen: 7.2,
      turbidity: 8,
      tds: 380,
      tss: 18,
      chlorophyll: 2.8
    },
    waterLevel: 92,
    lastUpdated: '2024-03-15T10:30:00Z',
    coordinates: [28.7495, 77.1183]
  },
  {
    id: '3',
    name: 'Hauz Khas Lake',
    location: 'South Delhi',
    area: 26,
    depth: 6.8,
    quality: {
      ph: 7.3,
      dissolvedOxygen: 7.0,
      turbidity: 10,
      tds: 420,
      tss: 22,
      chlorophyll: 3.0
    },
    waterLevel: 88,
    lastUpdated: '2024-03-15T10:30:00Z',
    coordinates: [28.5478, 77.1920]
  },
  {
    id: '4',
    name: 'Naini Lake',
    location: 'North Delhi',
    area: 18,
    depth: 5.5,
    quality: {
      ph: 7.4,
      dissolvedOxygen: 6.9,
      turbidity: 9,
      tds: 400,
      tss: 20,
      chlorophyll: 2.9
    },
    waterLevel: 90,
    lastUpdated: '2024-03-15T10:30:00Z',
    coordinates: [28.7019, 77.2016]
  },
  {
    id: '5',
    name: 'Sanjay Lake',
    location: 'East Delhi',
    area: 42,
    depth: 7.2,
    quality: {
      ph: 7.1,
      dissolvedOxygen: 6.7,
      turbidity: 11,
      tds: 470,
      tss: 28,
      chlorophyll: 3.5
    },
    waterLevel: 82,
    lastUpdated: '2024-03-15T10:30:00Z',
    coordinates: [28.6139, 77.3063]
  }
];

export const waterQualityStats: WaterQualityStats = {
  totalBodies: 7,
  averageQuality: 78,
  criticalBodies: 2,
  monitoredBodies: 7
};