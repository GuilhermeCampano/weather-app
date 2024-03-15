import type { ForecastApiResponse } from "../models";
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
    'weather_code',
    'is_day',
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
    return fetch(this.getForecastUrl(latitude, longitude))
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching forecast data');
      })
  }
}