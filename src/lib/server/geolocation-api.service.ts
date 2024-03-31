import { PRIVATE_GOOGLE_API_KEY } from '$env/static/private';
import type { AutocompleteItem, PlaceGeolocationDetails } from '$lib/models';
import { InMemoryCache } from './in-memory-cache';

const AutocompleteCache = new InMemoryCache<AutocompleteItem[]>();
const PlaceDetailsCache = new InMemoryCache<PlaceGeolocationDetails>();
const GeolocationCache = new InMemoryCache<PlaceGeolocationDetails>();
export class GeolocationService {
  readonly #GOOGLE_API = 'https://maps.googleapis.com/maps/api/';
  readonly #AUTOCOMPLETE_ENDPOINT = `${this.#GOOGLE_API}place/autocomplete/json`;
  readonly #PLACES_ENDPOINT = `${this.#GOOGLE_API}place/details/json`;
  readonly #GEOCODE_ENDPOINT = `${this.#GOOGLE_API}geocode/json`;

  public getPlaceAutocomplete(input: string): Promise<AutocompleteItem[]> {
    const cachedResults = AutocompleteCache.getFromCache(input);
    if (cachedResults) {
      console.log('Returning cached results for:', input);
      return Promise.resolve(cachedResults);
    }
    return fetch(`${this.#AUTOCOMPLETE_ENDPOINT}?input=${encodeURIComponent(input)}&key=${PRIVATE_GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.predictions.length ? this.normalizeAutocompleteResults(data.predictions) : [])
      .then((results: AutocompleteItem[]) => {
        AutocompleteCache.addToCache(input, results);
        return results;
      })
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching place autocomplete data');
      });
  }

  public getPlaceDetails(placeId: string): Promise<PlaceGeolocationDetails | null> {
    const cachedDetails = PlaceDetailsCache.getFromCache(placeId);
    if (cachedDetails) {
      console.log('Returning cached details for:', placeId);
      return Promise.resolve(cachedDetails);
    }
    return fetch(`${this.#PLACES_ENDPOINT}?place_id=${placeId}&key=${PRIVATE_GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.result ? this.normalizePlaceDetails(data.result) : null)
      .then((details: PlaceGeolocationDetails | null) => {
        if (details) {
          PlaceDetailsCache.addToCache(placeId, details);
        }
        return details;
      })
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

  public getGeolocationFromAddress(address: string): Promise<PlaceGeolocationDetails | null> {
    const cachedGeolocation = GeolocationCache.getFromCache(address);
    if (cachedGeolocation) {
      console.log('Returning cached geolocation for:', address);
      return Promise.resolve(cachedGeolocation);
    }
    return fetch(`${this.#GEOCODE_ENDPOINT}?address=${encodeURIComponent(address)}&key=${PRIVATE_GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.results.length ? this.normalizePlaceDetails(data.results[0]) : null)
      .then((details: PlaceGeolocationDetails | null) => {
        if (details) {
          GeolocationCache.addToCache(address, details);
        }
        return details;
      })
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching geolocation from address');
      });
  }
}