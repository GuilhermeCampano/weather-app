import { json } from '@sveltejs/kit';

const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

const STATIC_ARGUMENTS = `current=apparent_temperature,weather_code&hourly=weather_code`;

export async function GET({url}) {
  console.log('GET /forecast');
  try {
    const latitude = url.searchParams.get('latitude');
    const longitude = url.searchParams.get('longitude');
    const request = `${FORECAST_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&${STATIC_ARGUMENTS}`;
    console.log(request);
    const response = await fetch(request);
    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error(error);
    return json({ error: 'Error fetching forecast data' }, { status: 500 });
  }
}