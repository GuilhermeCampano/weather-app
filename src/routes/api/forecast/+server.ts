import { WeatherApiService } from "$lib/server/weather-api.service";

export async function GET({ url }: { url: URL }) {
  const latitude = <string>url.searchParams.get('latitude');
  const longitude = <string>url.searchParams.get('longitude');
  if (!latitude || !longitude) {
    console.error('Error: latitude and longitude are required');
    return new Response('Error: latitude and longitude are required', {
      status: 400
    });
  }
  
  try {
    console.log(`GET /api/forecast for latitude: ${latitude}, longitude: ${longitude}`);
    const weatherApiService = new WeatherApiService();
    const response = await weatherApiService.getForecast(latitude, longitude);
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Cache-Control', 'max-age=300'); // 5 minutes
    return new Response(JSON.stringify(response), {
      headers,
      status: 200
    });
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    return new Response('Error fetching forecast data', {
      status: 500
    });
  }
}