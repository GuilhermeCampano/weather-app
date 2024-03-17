import type { ForecastApiResponse } from "$lib";

export const forecastMockResponse = <ForecastApiResponse>{
  "metadata": {
    "latitude": 53.35,
    "longitude": -6.26,
    "timezone": "Europe/Dublin",
    "localTime": "2024-03-17T23:00"
  },
  "current": {
    "temperature": 11,
    "temperatureMax": 14,
    "temperatureMin": 8,
    "apparentTemperature": 7,
    "precipitationChance": 0,
    "windSpeed": 13,
    "weatherCode": {
      "icon": "partly_cloudy_night",
      "color": "yellow",
      "label": "Partly cloudy",
      "wmoCode": 3,
      "wmoCodeDescription": "Clouds generally forming or developing"
    }
  },
  "daily": [
    {
      "dayOfWeek": 0,
      "temperature": 14,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 51,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "dayOfWeek": 1,
      "temperature": 15,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 51,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "dayOfWeek": 2,
      "temperature": 13,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 53,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "dayOfWeek": 3,
      "temperature": 10,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 53,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "dayOfWeek": 4,
      "temperature": 15,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 51,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "dayOfWeek": 5,
      "temperature": 10,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "dayOfWeek": 6,
      "temperature": 9,
      "weatherCode": {
        "icon": "rainy",
        "color": "blue",
        "label": "Rain",
        "wmoCode": 80,
        "wmoCodeDescription": "Rain shower(s), slight"
      }
    }
  ],
  "hourly": [
    {
      "time": "2024-03-17T23:00",
      "temperature": 11,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T00:00",
      "temperature": 11,
      "weatherCode": {
        "icon": "clear_night",
        "color": "yellow",
        "label": "Clear sky",
        "wmoCode": 0,
        "wmoCodeDescription": "Cloud development not observed or not observable"
      }
    },
    {
      "time": "2024-03-18T01:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "clear_night",
        "color": "yellow",
        "label": "Clear sky",
        "wmoCode": 0,
        "wmoCodeDescription": "Cloud development not observed or not observable"
      }
    },
    {
      "time": "2024-03-18T02:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T03:00",
      "temperature": 11,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T04:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T05:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-18T06:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "clear_night",
        "color": "yellow",
        "label": "Clear sky",
        "wmoCode": 0,
        "wmoCodeDescription": "Cloud development not observed or not observable"
      }
    },
    {
      "time": "2024-03-18T07:00",
      "temperature": 10,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T08:00",
      "temperature": 11,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T09:00",
      "temperature": 12,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T10:00",
      "temperature": 13,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T11:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T12:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T13:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T14:00",
      "temperature": 15,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T15:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T16:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T17:00",
      "temperature": 13,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T18:00",
      "temperature": 12,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T19:00",
      "temperature": 12,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T20:00",
      "temperature": 13,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 51,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "time": "2024-03-18T21:00",
      "temperature": 14,
      "weatherCode": {
        "icon": "weather_mix",
        "color": "blue",
        "label": "Drizzle",
        "wmoCode": 51,
        "wmoCodeDescription": "Drizzle, not freezing, continuous"
      }
    },
    {
      "time": "2024-03-18T22:00",
      "temperature": 12,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T23:00",
      "temperature": 13,
      "weatherCode": {
        "icon": "clear_night",
        "color": "yellow",
        "label": "Clear sky",
        "wmoCode": 0,
        "wmoCodeDescription": "Cloud development not observed or not observable"
      }
    }
  ]
}