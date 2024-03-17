import type { AutocompleteItem, ForecastApiResponse, PlaceGeolocationDetails } from "$lib/models";
import { LocalStorage } from "./localstorage";

export default class ApiService {
  static #token: string = '';

  static set token(value: string) {
    this.#token = value;
  }

  static get token(): string {
    return this.#token;
  }
  static readonly AUTOCOMPLETE = '/api/autocomplete';
  static readonly FORECAST = '/api/forecast';
  static readonly GEOLOCATION = '/api/geolocation';

  static async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(endpoint, { ...options, headers: { 'Authorization': `Bearer ${this.token}` } });
    if (response.status === 403) {
      location.reload();
      throw new Error('Token is expired. Refreshing the page...');
    }

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  }

  static async getForecast(latitude: string, longitude: string): Promise<ForecastApiResponse> {
    return await this.fetch(`${this.FORECAST}?latitude=${latitude}&longitude=${longitude}`);
  }

  static async getGeolocation(placeId: string): Promise<PlaceGeolocationDetails> {
    return await this.fetch(`${this.GEOLOCATION}?placeId=${placeId}`);
  }

  static async getAutocomplete(input: string): Promise<AutocompleteItem[]> {
    const cachedAutocomplete = LocalStorage.getAutoCompleteHashTable(input);
    if (cachedAutocomplete) {
      return cachedAutocomplete;
    }
    const apiResults: AutocompleteItem[] = await this.fetch(`${this.AUTOCOMPLETE}?input=${input}`);
    LocalStorage.setAutoCompleteHashTable(input, apiResults);
    return apiResults;

  }
}