import { derived, get, writable, type Readable } from 'svelte/store';
import type { CurrentWeatherCard, ForecastApiResponse, ForecastDayCard, ForecastHourCard } from '../models/forecast.model';
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

export const currentWeather: Readable<CurrentWeatherCard | null> = derived(forecast, ($forecast) => {
  if (!$forecast) return null;
  return <CurrentWeatherCard>{
    temperature: Math.round($forecast.current.temperature_2m),
    apparentTemperature: Math.round($forecast.current.apparent_temperature),
    precipitationChance: $forecast.current.precipitation_probability,
    windSpeed: Math.round($forecast.current.wind_speed_10m),
    weatherCode: WeatherApiService.geWeatherCodeDetails($forecast.current.weather_code),
    temperatureMax: Math.round($forecast.daily.temperature_2m_max[0]),
    temperatureMin: Math.round($forecast.daily.temperature_2m_min[0])
  };
});

export const weekForecastCards: Readable<ForecastDayCard[]> = derived(forecast, ($forecast) => {
  if (!$forecast) return [];
  
  return $forecast.daily.time.map((day, index) => {
    return <ForecastDayCard>{
      dayOfWeek: index === 0 ? 'Today' : new Date(day).toLocaleDateString('en-US', { weekday: 'long' }),
      temperature: Math.round($forecast.daily.temperature_2m_max[index]),
      weatherCode: WeatherApiService.geWeatherCodeDetails($forecast.daily.weather_code[index])
    };
  });
});


export const hourlyForecast: Readable<ForecastHourCard[]> = derived(forecast, ($forecast) => {
  if (!$forecast) return [];
  
  return $forecast.hourly.time.map((hour, index) => {
    return <ForecastHourCard>{
      time: new Date(hour).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
      temperature: Math.round($forecast.hourly.temperature_2m[index]),
      weatherCode: WeatherApiService.geWeatherCodeDetails($forecast.hourly.weather_code[index]),
    };
  });
});