import { GeolocationService } from "$lib/server/geolocation-api.service";

export async function GET({ url }: { url: URL }) {
  console.log('GET /api/autocomplete');
  try {
    const input = <string>url.searchParams.get('input');
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getPlaceAutocomplete(input);
    console.log('response', response);
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response('Error fetching autocomplete data', {
      status: 500
    });
  }
}