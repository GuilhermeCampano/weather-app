import { get, writable } from 'svelte/store';

export const latitude = writable(40.7128);
export const longitude = writable(74.0060);
export const forecast = writable(null);
export const isLoading = writable(false);

export async function fetchForecast() {
  console.log('fetching forecast');
  isLoading.set(true);
  const res = await fetch(`/forecast?latitude=${get(latitude).toFixed(4)}&longitude=${get(longitude).toFixed(4)}`);
  const data = await res.json();
  forecast.set(data);
  isLoading.set(false);
}