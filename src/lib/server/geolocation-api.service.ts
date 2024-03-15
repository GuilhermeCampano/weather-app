import { env } from '$env/dynamic/private';
import type { AutocompleteItem, PlaceGeolocationDetails } from '$lib/models';
export class GeolocationService {
  readonly #GOOGLE_API = 'https://maps.googleapis.com/maps/api/';
  readonly #AUTOCOMPLETE_ENDPOINT = `${this.#GOOGLE_API}place/autocomplete/json`;
  readonly #PLACES_ENDPOINT = `${this.#GOOGLE_API}place/details/json`;

  public getPlaceAutocomplete(input: string): Promise<AutocompleteItem[]> {
    return fetch(`${this.#AUTOCOMPLETE_ENDPOINT}?input=${encodeURIComponent(input)}&key=${env.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.predictions.length ? this.normalizeAutocompleteResults(data.predictions) : [])
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching place autocomplete data');
      });
  }

  public getPlaceDetails(placeId: string): Promise<PlaceGeolocationDetails | null> {
    return fetch(`${this.#PLACES_ENDPOINT}?place_id=${placeId}&key=${env.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.result ? this.normalizePlaceDetails(data.result) : null)
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching place details');
      });
  }

  private normalizeAutocompleteResults(results: google.maps.places.AutocompletePrediction[]): AutocompleteItem[] {
    return results.map(result => ({
      placeId: result.place_id,
      description: result.description
    }));
  }

  private normalizePlaceDetails(result: google.maps.places.PlaceResult): PlaceGeolocationDetails | null {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {lat, lng} = result.geometry?.location as any;
    
    return {
      placeId: result.place_id as string,
      formattedAddress: result.formatted_address as string,
      latitude: lat,
      longitude: lng
    };
  }
}