export interface CityOption {
  name: string;
  latitude: number;
  longitude: number;
}

export const cities: CityOption[] = [
  { name: 'Custom', latitude: 0, longitude: 0 },
  { name: 'New York', latitude: 40.7128, longitude: -74.006 },
  { name: 'London', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { name: 'Dublin', latitude: 53.3498, longitude: -6.2603 },
  { name: 'Sao Paulo', latitude: -23.5505, longitude: -46.6333 },
  { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
  { name: 'Ha Noi', latitude: 21.0285, longitude: 105.8542 },
  { name: 'Ho Chi Minh', latitude: 10.7769, longitude: 106.7009 },
  { name: 'Dubai', latitude: 25.276987, longitude: 55.296249 },
  {name : 'Cherrapunji', latitude: 25.3005, longitude: 91.6964},
];