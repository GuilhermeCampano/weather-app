import { GeolocationService } from "$lib/server/geolocation.service";

export async function GET({ url }: { url: URL }) {
  console.log('GET /api/geolocation');
  try {
    const placeId = <string>url.searchParams.get('placeId');
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getPlaceDetails(placeId);
    console.log('response', response);
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  }
  catch (error) {
    console.error(error);
    return new Response('Error fetching geolocation data', {
      status: 500
    });
  }
}