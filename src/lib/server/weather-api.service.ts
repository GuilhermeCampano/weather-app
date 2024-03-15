import { WeatherCodeDetailsFactory } from "$lib/utils/weather-code-details-factory";
import type { ForecastApiMetadata, ForecastApiResponse, ForecastCurrentCard, ForecastDayCard, ForecastHourCard, OpenMeteoApiResponse } from "../models";
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
      .then((data: OpenMeteoApiResponse) => this.normalizeForecastData(data))
      .catch((error: Error) => {
        console.error(error);
        throw new Error('Error fetching forecast data');
      })
  }

  private normalizeMetadata(data: OpenMeteoApiResponse): ForecastApiMetadata {
    return {
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone,
      localTime: data.current.time,
    };
  }
  
  private normalizeCurrent(data: OpenMeteoApiResponse): ForecastCurrentCard {
    return {
      temperature: Math.round(data.current.temperature_2m),
      temperatureMax: Math.round(data.daily.temperature_2m_max[0]),
      temperatureMin: Math.round(data.daily.temperature_2m_min[0]),
      apparentTemperature: Math.round(data.current.apparent_temperature),
      precipitationChance: Math.round(data.current.precipitation_probability),
      windSpeed: Math.round(data.current.wind_speed_10m),
      weatherCode: new WeatherCodeDetailsFactory(data.current.weather_code, data.current.is_day > 0),
    };
  }
  
  private normalizeDaily(data: OpenMeteoApiResponse): ForecastDayCard[] {
    return data.daily.time.map((day, index) => {
      return {
        dayOfWeek: index,
        temperature: Math.round(data.daily.temperature_2m_max[index]),
        weatherCode: new WeatherCodeDetailsFactory(data.daily.weather_code[index]),
      };
    });
  }
  
  private normalizeHourly(data: OpenMeteoApiResponse): ForecastHourCard[] {
    const currentHour = new Date(data.current.time).getHours();
    const startIndex = currentHour;
    const endIndex = startIndex + 25;
    const hourlyData = data.hourly.time.slice(startIndex, endIndex);

    return hourlyData.map((hour, index) => {
      return {
        time: hour,
        temperature: Math.round(data.hourly.temperature_2m[index]),
        weatherCode: new WeatherCodeDetailsFactory(data.hourly.weather_code[index], data.hourly.is_day[index] > 0),
      };
    });
  }
  
  private normalizeForecastData(data: OpenMeteoApiResponse): ForecastApiResponse {
    return {
      metadata: this.normalizeMetadata(data),
      current: this.normalizeCurrent(data),
      daily: this.normalizeDaily(data),
      hourly: this.normalizeHourly(data),
    };
  }
}