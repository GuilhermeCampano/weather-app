import type { AutocompleteItem, PlaceGeolocationDetails } from "$lib/models";

export const DEFAULT_SEARCH: { placeDetails: PlaceGeolocationDetails, autocompleteItem: AutocompleteItem } = {
  placeDetails: {
    placeId: "ChIJL6wn6oAOZ0gRoHExl6nHAAo",
    formattedAddress: "Dublin, Ireland",
    latitude: 53.3498053,
    longitude: -6.2603097
  },
  autocompleteItem: {
    placeId: "ChIJL6wn6oAOZ0gRoHExl6nHAAo",
    description: "Dublin, Ireland"
  }
}