import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastCurrentCard {
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  apparentTemperature: number;
  precipitationChance: number;
  weatherCode: WeatherCodeDetails;
  windSpeed: number;
}
