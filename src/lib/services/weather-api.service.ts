import { WeatherCode } from "$lib/models/weather-code-icon.model";
import type { ForecastApiResponse } from "../models";
export class WeatherApiService {
  constructor() {}
  private readonly FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'is_day',
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
  
  static getTodayPrecipitationProbability(forecast: ForecastApiResponse): number {
    return forecast.daily.precipitation_probability_mean[0];
  }
  
  static getCurrentPrecipitationChance(forecast: ForecastApiResponse): number {
    const timeLocal = forecast.current.time;
    const findHourlyIndex = forecast.hourly.time.findIndex((time) => time === timeLocal);
    if(findHourlyIndex === -1) {
      return 0;
    }
    return forecast.hourly.precipitation_probability[findHourlyIndex] * 100;
  }

  static geWeatherCode(code: number): WeatherCode {
    if (code >= 0 && code <= 19) {
      return WeatherCode.ClearSky;
    } else if (code >= 20 && code <= 29) {
      return WeatherCode.PartlyCloudy;
    } else if (code >= 30 && code <= 39) {
      return WeatherCode.Cloudy;
    } else if (code >= 40 && code <= 49) {
      return WeatherCode.Overcast;
    } else if (code >= 50 && code <= 59) {
      return WeatherCode.Fog;
    } else if (code >= 60 && code <= 69) {
      return WeatherCode.FreezingFog;
    } else if (code >= 70 && code <= 79) {
      return WeatherCode.Drizzle;
    } else if (code >= 80 && code <= 89) {
      return WeatherCode.Rain;
    } else if (code >= 90 && code <= 99) {
      return WeatherCode.Snow;
    } else {
      throw new Error('Invalid weather code');
    }
  }
}