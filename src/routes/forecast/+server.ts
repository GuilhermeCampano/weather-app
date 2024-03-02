import { json } from '@sveltejs/kit';
import type { ForecastApiResponse } from '../../models';

const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

const CURRENT_QUERY = `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code`;
const HOURLY_QUERY = `hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`;
const DAILY_QUERY = `daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,snowfall_sum,weather_code`;

export async function GET({url}) {
  console.log('GET /forecast');
  try {
    const latitude = url.searchParams.get('latitude');
    const longitude = url.searchParams.get('longitude');
    const request = `${FORECAST_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&${CURRENT_QUERY}&${HOURLY_QUERY}&${DAILY_QUERY}`;
    console.log(request);
    const response = await fetch(request);
    const data: ForecastApiResponse = await response.json();
    return json(data);
  } catch (error) {
    console.error(error);
    return json({ error: 'Error fetching forecast data' }, { status: 500 });
  }
}