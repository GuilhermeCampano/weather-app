import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastDayCard {
  dayOfWeek: number;
  temperature: number;
  weatherCode: WeatherCodeDetails;
}
