import { env } from '$env/dynamic/private';
export class GeolocationService {
  readonly #API_KEY = 'AIzaSyC2YwoIGga-xHDKayrLaUSofcly_4bgRpk';
  readonly #AUTOCOMPLETE_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  readonly #PLACES_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/details/json';

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