import { GeolocationService } from "$lib/server/geolocation-api.service";

export async function GET({ url }: { url: URL }): Promise<Response> {
  const input = <string>url.searchParams.get('input');
  if (!input) {
    console.error('Error: input is required');
    return new Response('Error: input is required', {
      status: 400
    });
  }
  console.log(`GET /api/autocomplete for input: ${input}`);

  try {
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getPlaceAutocomplete(input);
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error fetching autocomplete data:', error);
    return new Response('Error fetching autocomplete data', {
      status: 500
    });
  }
}