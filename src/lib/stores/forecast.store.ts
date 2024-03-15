import { derived, writable, type Readable } from 'svelte/store';
import type { ForecastApiResponse, ForecastCurrentCard, ForecastDayCard, ForecastHourCard } from '$lib/models';

export const forecast = writable<ForecastApiResponse | null>(null);
export const isLoading = writable(false);

export async function fetchForecast(latitude: string, longitude: string) {
  isLoading.set(true);
  const response = await fetch('/api/forecast?latitude=' + latitude + '&longitude=' + longitude);
  const data = await response.json();
  forecast.set(data);
  isLoading.set(false);
}


export const currentWeather: Readable<ForecastCurrentCard | null> = derived(forecast, ($forecast) => {
  return $forecast?.current ?? null
});

export const weekForecastCards: Readable<ForecastDayCard[]> = derived(forecast, ($forecast) => {
  return $forecast?.daily ?? [];
});


export const hourlyForecastCards: Readable<ForecastHourCard[]> = derived(forecast, ($forecast) => {
  if (!$forecast) return [];

  const currentHour = new Date($forecast.metadata.localTime).getHours();
  const startIndex = currentHour;
  const endIndex = startIndex + 25;
  return $forecast.hourly.slice(startIndex, endIndex);
});