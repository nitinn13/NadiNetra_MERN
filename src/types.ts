export interface WaterBody {
  id: string;
  name: string;
  location: string;
  area: number;
  depth: number;
  quality: {
    ph: number;
    dissolvedOxygen: number;
    turbidity: number;
    tds: number;
    tss: number;
    chlorophyll: number;
  };
  waterLevel: number;
  lastUpdated: string;
  coordinates: [number, number];
}

export interface WaterQualityStats {
  totalBodies: number;
  averageQuality: number;
  criticalBodies: number;
  monitoredBodies: number;
}

export interface HistoricalData {
  date: string;
  ph: number;
  dissolvedOxygen: number;
  turbidity: number;
  pollutants: number;
  biodiversity: number;
}

export interface CommunityReport {
  id: string;
  waterBodyId: string;
  reportType: 'pollution' | 'illegal_activity' | 'infrastructure' | 'other';
  description: string;
  status: 'pending' | 'investigating' | 'resolved';
  createdAt: string;
}

export interface WQIPrediction {
  date: string;
  predicted: number;
  actual?: number;
}