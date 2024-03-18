import type { ForecastApiResponse } from "$lib";

export const forecastMockResponse = <ForecastApiResponse>{
  "metadata": {
    "latitude": -23.5,
    "longitude": -46.625,
    "timezone": "America/Sao_Paulo",
    "localTime": "2024-03-18T05:00"
  },
  "current": {
    "temperature": 23,
    "temperatureMax": 30,
    "temperatureMin": 23,
    "apparentTemperature": 27,
    "precipitationChance": 23,
    "windSpeed": 1,
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
      "dayOfWeek": "2024-03-18",
      "temperature": 30,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 96,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, with hail** at time of observation"
      }
    },
    {
      "dayOfWeek": "2024-03-19",
      "temperature": 30,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 96,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, with hail** at time of observation"
      }
    },
    {
      "dayOfWeek": "2024-03-20",
      "temperature": 31,
      "weatherCode": {
        "icon": "foggy",
        "color": "blue",
        "label": "Fog",
        "wmoCode": 45,
        "wmoCodeDescription": "Fog or ice fog, sky invisible"
      }
    },
    {
      "dayOfWeek": "2024-03-21",
      "temperature": 31,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 96,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, with hail** at time of observation"
      }
    },
    {
      "dayOfWeek": "2024-03-22",
      "temperature": 24,
      "weatherCode": {
        "icon": "rainy",
        "color": "blue",
        "label": "Rain",
        "wmoCode": 80,
        "wmoCodeDescription": "Rain shower(s), slight"
      }
    },
    {
      "dayOfWeek": "2024-03-23",
      "temperature": 22,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "dayOfWeek": "2024-03-24",
      "temperature": 25,
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
      "time": "2024-03-18T05:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T06:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T07:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "foggy",
        "color": "blue",
        "label": "Fog",
        "wmoCode": 45,
        "wmoCodeDescription": "Fog or ice fog, sky invisible"
      }
    },
    {
      "time": "2024-03-18T08:00",
      "temperature": 24,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-18T09:00",
      "temperature": 26,
      "weatherCode": {
        "icon": "cloud",
        "color": "blue",
        "label": "Cloudy",
        "wmoCode": 1,
        "wmoCodeDescription": "Clouds generally dissolving or becoming less developed"
      }
    },
    {
      "time": "2024-03-18T10:00",
      "temperature": 28,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-18T11:00",
      "temperature": 29,
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
      "temperature": 30,
      "weatherCode": {
        "icon": "partly_cloudy_day",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-18T13:00",
      "temperature": 30,
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
      "temperature": 29,
      "weatherCode": {
        "icon": "rainy",
        "color": "blue",
        "label": "Rain",
        "wmoCode": 80,
        "wmoCodeDescription": "Rain shower(s), slight"
      }
    },
    {
      "time": "2024-03-18T15:00",
      "temperature": 29,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 95,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, without hail** but with rain and/or snow at time of observation"
      }
    },
    {
      "time": "2024-03-18T16:00",
      "temperature": 28,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 95,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, without hail** but with rain and/or snow at time of observation"
      }
    },
    {
      "time": "2024-03-18T17:00",
      "temperature": 26,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 96,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, with hail** at time of observation"
      }
    },
    {
      "time": "2024-03-18T18:00",
      "temperature": 25,
      "weatherCode": {
        "icon": "thunderstorm",
        "color": "blue",
        "label": "Thunderstorm",
        "wmoCode": 95,
        "wmoCodeDescription": "Thunderstorm, slight or moderate, without hail** but with rain and/or snow at time of observation"
      }
    },
    {
      "time": "2024-03-18T19:00",
      "temperature": 25,
      "weatherCode": {
        "icon": "rainy",
        "color": "blue",
        "label": "Rain",
        "wmoCode": 80,
        "wmoCodeDescription": "Rain shower(s), slight"
      }
    },
    {
      "time": "2024-03-18T20:00",
      "temperature": 24,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T21:00",
      "temperature": 24,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-18T22:00",
      "temperature": 24,
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
      "temperature": 24,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-19T00:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-19T01:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-19T02:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 3,
        "wmoCodeDescription": "Clouds generally forming or developing"
      }
    },
    {
      "time": "2024-03-19T03:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-19T04:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    },
    {
      "time": "2024-03-19T05:00",
      "temperature": 23,
      "weatherCode": {
        "icon": "partly_cloudy_night",
        "color": "yellow",
        "label": "Partly cloudy",
        "wmoCode": 2,
        "wmoCodeDescription": "State of sky on the whole unchanged"
      }
    }
  ]
};