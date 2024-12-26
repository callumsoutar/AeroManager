export interface Aircraft {
  id: string;
  registration: string;
  type: string;
  model: string;
  year: string;
  engineHours: number;
  lastMaintenance: string;
  nextServiceDue: string;
  status: 'Active' | 'Maintenance' | 'Inactive';
  photoUrl?: string;
}

export const aircraftData: Aircraft[] = [
  {
    id: 'aircraft-1',
    registration: 'FLC',
    type: 'C-152',
    model: 'Cessna 152',
    year: '1978',
    engineHours: 12450,
    lastMaintenance: '2023-12-01',
    nextServiceDue: '2024-03-01',
    status: 'Active',
    photoUrl: '/FLC.png'
  },
  {
    id: 'aircraft-2',
    registration: 'JEN',
    type: 'A-152',
    model: 'Aerobat',
    year: '1980',
    engineHours: 14200,
    lastMaintenance: '2023-11-15',
    nextServiceDue: '2024-02-15',
    status: 'Active'
  },
  {
    id: 'aircraft-3',
    registration: 'KID',
    type: 'A-152',
    model: 'Aerobat',
    year: '1979',
    engineHours: 13800,
    lastMaintenance: '2023-12-10',
    nextServiceDue: '2024-03-10',
    status: 'Active'
  }
  // ... add more aircraft as needed
]; 