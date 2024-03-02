import { json } from '@sveltejs/kit';
import type { ForecastApiResponse } from '../../models';

const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

const CURRENT_PARAMS = [
  'temperature_2m',
  'relative_humidity_2m',
  'apparent_temperature',
  'is_day',
  'precipitation',
  'rain',
  'showers',
  'snowfall',
  'weather_code'
];
const HOURLY_PARAMS = [
  'temperature_2m',
  'precipitation',
  'rain',
  'showers',
  'snowfall',
  'weather_code'
];

const DAILY_PARAMS = [
  'temperature_2m_max',
  'temperature_2m_min',
  'apparent_temperature_max',
  'apparent_temperature_min',
  'precipitation_sum',
  'snowfall_sum',
  'weather_code'
];

export async function GET({url}: {url: URL}): Promise<Response> {
  console.log('GET /forecast');
  try {
    const latitude = <string>url.searchParams.get('latitude');
    const longitude = <string>url.searchParams.get('longitude');
    const request = getForecastUrl(latitude, longitude);
    console.log(request);
    const response = await fetch(request);
    const data: ForecastApiResponse = await response.json();
    return json(data);
  } catch (error) {
    console.error(error);
    return json({ error: 'Error fetching forecast data' }, { status: 500 });
  }
}

function getForecastUrl(latitude: string, longitude: string): string {
  return [
    `${FORECAST_ENDPOINT}`,
    `?latitude=${latitude}`,
    `&longitude=${longitude}`,
    `&current=${CURRENT_PARAMS.join(',')}`,
    `&hourly=${HOURLY_PARAMS.join(',')}`,
    `&daily=${DAILY_PARAMS.join(',')}`
  ].join('');
}