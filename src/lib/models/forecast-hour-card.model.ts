import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastHourCard {
  time: string;
  temperature: number;
  weatherCode: WeatherCodeDetails;
}