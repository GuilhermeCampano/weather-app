import type { ForecastApiResponse } from "$lib/models";

export default class ApiService {
  static readonly AUTOCOMPLETE = '/api/autocomplete';
  static readonly FORECAST = '/api/forecast';
  static readonly GEOLOCATION = '/api/geolocation';

  static async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  }

  static async getForecast(latitude: string, longitude: string): Promise<ForecastApiResponse> {
    return await this.fetch(`${this.FORECAST}?latitude=${latitude}&longitude=${longitude}`);
  }

  static async getGeolocation(placeId: string): Promise<google.maps.places.PlaceResult> {
    return await this.fetch(`${this.GEOLOCATION}?placeId=${placeId}`);
  }

  static async getAutocomplete(input: string): Promise<google.maps.places.AutocompletePrediction[]> {
    return await this.fetch(`${this.AUTOCOMPLETE}?input=${input}`);
  }
}