import { WeatherApiService } from "$lib/server/weather-api.service";

export async function GET({ url }: { url: URL }) {
  console.log('GET /api/forecast');
  try {
    const latitude = <string>url.searchParams.get('latitude');
    const longitude = <string>url.searchParams.get('longitude');
    const weatherApiService = new WeatherApiService();
    const response = await weatherApiService.getForecast(latitude, longitude);
    console.log('response', response);
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response('Error fetching forecast data', {
      status: 500
    });
  }
}