import { writable } from "svelte/store";

const isBrowser = typeof window !== 'undefined';

const initialPreferences = {
  units: isBrowser ? localStorage.getItem('units') || 'metric' : 'metric',
  font: isBrowser ? localStorage.getItem('font') || 'Open Sans' : 'Open Sans',
  theme: isBrowser ? localStorage.getItem('theme') || 'light' : 'light',
  language: isBrowser ? localStorage.getItem('language') || 'en' : 'en',
};

export const units = writable(initialPreferences.units);
export const font = writable(initialPreferences.font);
export const theme = writable(initialPreferences.theme);
export const language = writable(initialPreferences.language);

if (isBrowser) {
  language.subscribe(value => localStorage.setItem('language', value));
  units.subscribe(value => localStorage.setItem('units', value));
  font.subscribe(value => localStorage.setItem('font', value));
  theme.subscribe(value => localStorage.setItem('theme', value));
}