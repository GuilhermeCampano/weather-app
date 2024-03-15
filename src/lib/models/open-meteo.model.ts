export interface OpenMeteoApiResponse {
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


interface Current {
  apparent_temperature: number;
  interval: number;
  is_day: number;
  time: string;
  precipitation_probability: number;
  temperature_2m: number;
  weather_code: number;
  wind_speed_10m: number;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
  precipitation_probability: number[];
  is_day: number[];
}

interface Daily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
}

interface Units {
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