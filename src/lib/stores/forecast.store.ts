import { derived, get, writable } from 'svelte/store';
import type { CurrentWeatherCard, ForecastApiResponse } from '../models/forecast.model';
import { cities } from '../models/cities.model';
import { WeatherApiService } from '../services/weather-api.service';

export const selectedCity = writable(cities[0]);
export const latitude = writable(0);
export const longitude = writable(0);
export const forecast = writable<ForecastApiResponse | null>(null);
export const isLoading = writable(false);

export async function fetchForecast() {
  const weatherApiService = new WeatherApiService();
  isLoading.set(true);
  const response = await weatherApiService.getForecast(get(latitude).toFixed(4), get(longitude).toFixed(4));
  forecast.set(response);
  isLoading.set(false);
}

export const currentWeather = derived(forecast, ($forecast) => {
  if ($forecast) {
    return <CurrentWeatherCard>{
      temperature: Math.round($forecast.current.temperature_2m),
      apparentTemperature: Math.round($forecast.current.apparent_temperature),
      precipitationChance: WeatherApiService.getCurrentPrecipitationChance($forecast),
      windSpeed: Math.round($forecast.current.wind_speed_10m),
      weatherCode: WeatherApiService.geWeatherCode($forecast.current.weather_code),
      temperatureMax: Math.round($forecast.daily.temperature_2m_max[0]),
      temperatureMin: Math.round($forecast.daily.temperature_2m_min[0])
    };
  }
  return null;
});

