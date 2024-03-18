import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastDayCard {
  dayOfWeek: string;
  temperature: number;
  weatherCode: WeatherCodeDetails;
}
