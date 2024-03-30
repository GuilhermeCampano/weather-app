import { GeolocationService } from "$lib/server/geolocation-api.service";
export async function GET({ url }: { url: URL }) {
  const address = <string>url.searchParams.get('address');
  if(!address) {
    console.error('Error: address is required');
    return new Response('Error: address is required', {
      headers: { 'content-type': 'application/json' },
      status: 400
    });
  }

  console.log(`GET /api/address-geolocation for address: ${address}`);

  try {
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getGeolocationFromAddress(address);
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return new Response('Error fetching geolocation data', {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }
}