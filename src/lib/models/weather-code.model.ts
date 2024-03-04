export enum WeatherCode {
  ClearSky = 'clear-sky',
  PartlyCloudy = 'partly-cloudy',
  Cloudy = 'cloudy',
  Overcast = 'overcast',
  Fog = 'fog',
  FreezingFog = 'freezing-fog',
  Drizzle = 'drizzle',
  Rain = 'rain',
  Snow = 'snow'
}

export const WeatherEmojis = {
  [WeatherCode.ClearSky]: '☀️',
  [WeatherCode.PartlyCloudy]: '🌤️',
  [WeatherCode.Cloudy]: '☁️',
  [WeatherCode.Overcast]: '☁️',
  [WeatherCode.Fog]: '🌫️',
  [WeatherCode.FreezingFog]: '🌫️',
  [WeatherCode.Drizzle]: '🌧️',
  [WeatherCode.Rain]: '🌧️',
  [WeatherCode.Snow]: '❄️'
}

