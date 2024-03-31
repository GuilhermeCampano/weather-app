import { GeolocationService } from '$lib/server/geolocation-api.service.js';
import { WeatherApiService } from '$lib/server/weather-api.service.js';
import {error} from '@sveltejs/kit';

export async function load({ params }) {
  const address = params.slug;
  const geolocationService = new GeolocationService();
  const weatherService = new WeatherApiService();

  try {
    const placeDetails = await geolocationService.getGeolocationFromAddress(address);

    if(!placeDetails) {
      return error(404, 'Place not found');
    }
    const forecast = await weatherService.getForecast(placeDetails.latitude.toString(), placeDetails.longitude.toString());

    return {
      props: {
        placeDetails,
        forecast: JSON.stringify(forecast)
      }
    };
  } catch (err) {
    console.error(err);
    return error(500, 'An error occurred while fetching data');
  }
}