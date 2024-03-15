import { GeolocationService } from "$lib/server/geolocation-api.service";

export async function GET({ url }: { url: URL }) {
  const placeId = <string>url.searchParams.get('placeId');
  if (!placeId) {
    console.error('Error: placeId is required');
    return new Response('Error: placeId is required', {
      headers: { 'content-type': 'application/json' },
      status: 400
    });
  }

  console.log(`GET /api/geolocation for placeId: ${placeId}`);
  try {
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getPlaceDetails(placeId);
    console.log('Response from Geolocation API:', JSON.stringify(response, null, 2));
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