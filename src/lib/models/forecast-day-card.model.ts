import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastDayCard {
  dayOfWeek:  string | number;
  temperature: number;
  weatherCode: WeatherCodeDetails;
}
