import type { WeatherCodeDetails } from "./weather-code.model";

export interface ForecastAPIRequest {
  latitude: number;
  longitude: number;
}

export interface ForecastApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Units;
  current: Current;
  hourly_units: Units;
  hourly: Hourly;
  daily_units: Units;
  daily: Daily;
}


export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m?: number;
  apparent_temperature: number;
  is_day: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  weather_code: number;
  wind_speed_10m: number;
  precipitation_probability: number;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
}

export interface Units {
  time: string;
  interval?: string;
  temperature_2m: string;
  relative_humidity_2m?: string;
  apparent_temperature?: string;
  is_day?: string;
  precipitation?: string;
  rain?: string;
  showers?: string;
  snowfall?: string;
  weather_code: string;
  precipitation_probability?: string;
  temperature_2m_max?: string;
  temperature_2m_min?: string;
  apparent_temperature_max?: string;
  apparent_temperature_min?: string;
  precipitation_sum?: string;
  snowfall_sum?: string;
  precipitation_probability_mean?: string;
}

export interface Daily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  precipitation_sum: number[];
  snowfall_sum: number[];
  precipitation_probability_mean: number[];
}

export interface CurrentWeatherCard {
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  apparentTemperature: number;
  precipitationChance: number;
  weatherCode: WeatherCodeDetails;
  windSpeed: number;
}

export interface ForecastDayCard {
  dayOfWeek: string;
  temperature: number;
  weatherCode: WeatherCodeDetails;
}