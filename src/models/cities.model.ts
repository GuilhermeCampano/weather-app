export interface CityOption {
  name: string;
  latitude: number;
  longitude: number;
}

export const cities: CityOption[] = [
  {name: 'Custom', latitude: 0, longitude: 0},
  { name: 'New York', latitude: 40.7128, longitude: -74.006 },
  { name: 'London', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { name: 'Dublin', latitude: 53.3498, longitude: -6.2603 },
  { name: 'Sao Paulo', latitude: -23.5505, longitude: -46.6333 }
];