import type { ForecastApiResponse } from "../models";

export class WeatherApiService {
  constructor() {}
  private readonly FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'is_day',
    'precipitation',
    'rain',
    'showers',
    'snowfall',
    'weather_code'
  ];
  private readonly HOURLY_PARAMS = [
    'temperature_2m',
    'precipitation',
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
    'precipitation_sum',
    'snowfall_sum',
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
    console.log('GET /forecast');
    try {
      const request = this.getForecastUrl(latitude, longitude);
      console.log(request);
      const response = await fetch(request);
      const data: ForecastApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching forecast data');
    }
  }
}