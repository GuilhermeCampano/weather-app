export class AutocompleteGeolocationService {
  private autocompleteService: google.maps.places.AutocompleteService;
  private placesService: google.maps.places.PlacesService;

  constructor() {
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
  }

  search(input: string): Promise<google.maps.places.AutocompletePrediction[]> {
    return new Promise((resolve) => {
      this.autocompleteService.getPlacePredictions({ input }, (predictions) => {
        resolve(predictions || []);
      });
    });
  }

  selectLocation(placeId: string): Promise<google.maps.places.PlaceResult> {
    return new Promise((resolve, reject) => {
      this.placesService.getDetails({ placeId }, (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(result);
        } else {
          reject(new Error(`Failed to get place details: ${status}`));
        }
      });
    });
  }
}