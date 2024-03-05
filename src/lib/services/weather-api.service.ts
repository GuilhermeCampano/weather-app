import { WeatherCode, WeatherCodeDetailsMap } from "$lib/models/weather-code.model";
import type { ForecastApiResponse, WeatherCodeDetails } from "../models";
export class WeatherApiService {
  constructor() {}
  private readonly FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'is_day',
    'precipitation_probability',
    'rain',
    'showers',
    'snowfall', 
    'weather_code',
    'wind_speed_10m',
  ];
  private readonly HOURLY_PARAMS = [
    'temperature_2m',
    'precipitation_probability',
    'rain',
    'showers',
    'snowfall',
    'weather_code'
  ];
  private readonly DAILY_PARAMS = [
    'temperature_2m_max',
    'temperature_2m_min',
    'apparent_temperature_max',
    'apparent_temperature_min',
    'precipitation_probability_mean',
    'weather_code'
  ];

  private getForecastUrl(latitude: string, longitude: string): string {
    return [
      `${this.FORECAST_ENDPOINT}`,
      `?latitude=${latitude}`,
      `&longitude=${longitude}`,
      `&current=${this.CURRENT_PARAMS.join(',')}`,
      `&hourly=${this.HOURLY_PARAMS.join(',')}`,
      `&daily=${this.DAILY_PARAMS.join(',')}`
    ].join('');
  }

  public async getForecast(latitude: string, longitude: string): Promise<ForecastApiResponse> {
    try {
      const request = this.getForecastUrl(latitude, longitude);
      const response = await fetch(request);
      const data: ForecastApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching forecast data');
    }
  }

  static geWeatherCode(code: number): WeatherCodeDetails {
    let weatherCode;
    if (code >= 0 && code <= 19) {
      weatherCode = WeatherCode.ClearSky;
    } else if (code >= 20 && code <= 29) {
      weatherCode = WeatherCode.PartlyCloudy;
    } else if (code >= 30 && code <= 39) {
      weatherCode = WeatherCode.Cloudy;
    } else if (code >= 40 && code <= 49) {
      weatherCode = WeatherCode.Overcast;
    } else if (code >= 50 && code <= 59) {
      weatherCode = WeatherCode.Fog;
    } else if (code >= 60 && code <= 69) {
      weatherCode = WeatherCode.FreezingFog;
    } else if (code >= 70 && code <= 79) {
      weatherCode = WeatherCode.Drizzle;
    } else if (code >= 80 && code <= 89) {
      weatherCode = WeatherCode.Rain;
    } else if (code >= 90 && code <= 99) {
      weatherCode = WeatherCode.Snow;
    } else {
      throw new Error('Invalid weather code');
    }
    return WeatherCodeDetailsMap.get(weatherCode) as WeatherCodeDetails;
  }
}