import type { ForecastCurrentCard, ForecastDayCard, ForecastHourCard } from ".";

export interface ForecastApiResponse {
  current: ForecastCurrentCard;
  daily: ForecastDayCard[];
  hourly: ForecastHourCard[];
  units?: {
    temperature: string;
    precipitation: string;
    windSpeed: string;
  }
  metadata: ForecastApiMetadata;
}

export interface ForecastApiMetadata {
  latitude: number | string;
  longitude: number | string;
  timezone: string;
  localTime: string;
}
