import type { PlaceGeolocationDetails } from "$lib/models";
import { GeolocationService } from "$lib/server/geolocation-api.service";

export async function GET({ url }: { url: URL }) {
  console.log(`GET ${url.pathname}, query: ${url.searchParams}`);
  const placeId = <string>url.searchParams.get('placeId');
  const latitude = <string>url.searchParams.get('latitude');
  const longitude = <string>url.searchParams.get('longitude');

  if (!placeId && (!latitude || !longitude)) {
    console.error('Error: placeId or latitude and longitude are required');
    return new Response('Error: placeId or latitude and longitude are required', {
      headers: { 'content-type': 'application/json' },
      status: 400
    });
  }

  const geolocationService = new GeolocationService();
  let fetchStrategy: () => Promise<PlaceGeolocationDetails | null> = async () => null;

  if (placeId) {
    fetchStrategy = () => geolocationService.getPlaceDetailsByPlaceId(placeId);
  }

  if (latitude && longitude) {
    fetchStrategy = () => geolocationService.getPlaceDetailsByCoordinates(latitude, longitude);
  }

  try {
    const response = await fetchStrategy();
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  }
  catch (error) {
    console.error('Error fetching geolocation data:', error);
    return new Response('Error fetching geolocation data', {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }
}

