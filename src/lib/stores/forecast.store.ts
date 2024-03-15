import { derived, writable, type Readable } from 'svelte/store';
import type { ForecastApiResponse, ForecastCurrentCard, ForecastDayCard, ForecastHourCard } from '$lib/models';
import ApiService from '$lib/utils/api-service';

export const forecast = writable<ForecastApiResponse | null>(null);
export const isLoading = writable(false);

export async function fetchForecast(latitude: string, longitude: string) {
  isLoading.set(true);
  const forecastApiResponse = await ApiService.getForecast(latitude, longitude);
  forecast.set(forecastApiResponse);
  isLoading.set(false);
}

export const currentWeather: Readable<ForecastCurrentCard | null> = derived(forecast, $forecast => $forecast?.current ?? null);

export const weekForecastCards: Readable<ForecastDayCard[]> = derived(forecast, $forecast => $forecast?.daily ?? []);

export const hourlyForecastCards: Readable<ForecastHourCard[]> = derived(forecast, $forecast => $forecast?.hourly ?? []);