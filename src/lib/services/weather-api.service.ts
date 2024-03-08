import { WeatherCodeDetailsMap, WeatherCodeLookup } from "$lib/models/weather-code.model";
import type { ForecastApiResponse, WeatherCodeDetails } from "../models";
export class WeatherApiService {
  constructor() { }
  private readonly FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = [
    'temperature_2m',
    'apparent_temperature',
    'is_day',
    'precipitation_probability',
    'weather_code',
    'wind_speed_10m',
  ];
  private readonly HOURLY_PARAMS = [
    'temperature_2m',
    'precipitation_probability',
    'weather_code'
  ];
  private readonly DAILY_PARAMS = [
    'temperature_2m_max',
    'temperature_2m_min',
    'apparent_temperature_max',
    'apparent_temperature_min',
    'weather_code'
  ];

  private getForecastUrl(latitude: string, longitude: string): string {
    return [
      `${this.FORECAST_ENDPOINT}`,
      `?latitude=${latitude}`,
      `&longitude=${longitude}`,
      `&timezone=auto`,
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

  static geWeatherCodeDetails(code: number): WeatherCodeDetails {
    for (const lookup of WeatherCodeLookup) {
      if (lookup.condition(code)) {
        return WeatherCodeDetailsMap.get(lookup.code) as WeatherCodeDetails;
      }
    }
    throw new Error('Weather code not found');
  }
}