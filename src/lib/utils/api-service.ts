import { type ForecastApiResponse, Endpoints, type PlaceGeolocationDetails, type AutocompleteItem } from "$lib";

export default class ApiService {
  static #token: string = '';

  static set token(value: string) {
    this.#token = value;
  }

  static get token(): string {
    return this.#token;
  }

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

  static async getForecast(latitude: number, longitude: number): Promise<ForecastApiResponse> {
    if(!latitude || !longitude) throw new Error('Latitude and longitude are required');
    return await this.fetch(`${Endpoints.FORECAST}?latitude=${latitude}&longitude=${longitude}`);
  }

  static async getGeolocation(placeId: string): Promise<PlaceGeolocationDetails> {
    return await this.fetch(`${Endpoints.GEOLOCATION}?placeId=${placeId}`);
  }

  static async getAutocomplete(input: string): Promise<AutocompleteItem[]> {
    return await this.fetch(`${Endpoints.AUTOCOMPLETE}?input=${input}`);
  }
}