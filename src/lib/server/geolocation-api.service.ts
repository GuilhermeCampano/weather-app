import { env } from '$env/dynamic/private';
export class GeolocationService {
  readonly #GOOGLE_API = 'https://maps.googleapis.com/maps/api/';
  readonly #AUTOCOMPLETE_ENDPOINT = `${this.#GOOGLE_API}place/autocomplete/json`;
  readonly #PLACES_ENDPOINT = `${this.#GOOGLE_API}place/details/json`;

  public getPlaceAutocomplete(input: string): Promise<google.maps.places.AutocompletePrediction[]> {
    return fetch(`${this.#AUTOCOMPLETE_ENDPOINT}?input=${encodeURIComponent(input)}&key=${env.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.predictions || [])
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching place autocomplete data');
      });
  }

  public getPlaceDetails(placeId: string): Promise<google.maps.places.PlaceResult> {
    return fetch(`${this.#PLACES_ENDPOINT}?place_id=${placeId}&key=${env.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => data.result)
      .catch(error => {
        console.error(error);
        throw new Error('Error fetching place details');
      });
  }
}