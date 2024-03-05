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

export enum WeatherMaterialIcons {
  ClearSky = 'clear_day',
  PartlyCloudy = 'partly_cloudy_day',
  Cloud = 'cloud',
  Fog = 'foggy',
  Rain = 'rainy',
  Snow = 'ac_unit'
}

export interface WeatherCodeDetails {
  code: WeatherCode;
  icon: WeatherMaterialIcons;
  color: IconColor;
  description: string;
}

export type IconColor = 'yellow' | 'orange' | 'blue';

export const WeatherCodeDetailsMap = new Map<WeatherCode, WeatherCodeDetails>([
  [WeatherCode.ClearSky, {
    code: WeatherCode.ClearSky,
    icon: WeatherMaterialIcons.ClearSky,
    color: 'yellow',
    description: 'Clear sky'
  }],
  [WeatherCode.PartlyCloudy, {
    code: WeatherCode.PartlyCloudy,
    icon: WeatherMaterialIcons.PartlyCloudy,
    color: 'orange',
    description: 'Partly cloudy'
  }],
  [WeatherCode.Cloudy, {
    code: WeatherCode.Cloudy,
    icon: WeatherMaterialIcons.Cloud,
    color: 'blue',
    description: 'Cloudy'
  }],
  [WeatherCode.Overcast, {
    code: WeatherCode.Overcast,
    icon: WeatherMaterialIcons.Cloud,
    color: 'blue',
    description: 'Overcast'
  }],
  [WeatherCode.Fog, {
    code: WeatherCode.Fog,
    icon: WeatherMaterialIcons.Fog,
    color: 'blue',
    description: 'Fog'
  }],
  [WeatherCode.FreezingFog, {
    code: WeatherCode.FreezingFog,
    icon: WeatherMaterialIcons.Fog,
    color: 'blue',
    description: 'Freezing fog'
  }],
  [WeatherCode.Drizzle, {
    code: WeatherCode.Drizzle,
    icon: WeatherMaterialIcons.Rain,
    color: 'blue',
    description: 'Drizzle'
  }],
  [WeatherCode.Rain, {
    code: WeatherCode.Rain,
    icon: WeatherMaterialIcons.Rain,
    color: 'blue',
    description: 'Rain'
  }],
  [WeatherCode.Snow, {
    code: WeatherCode.Snow,
    icon: WeatherMaterialIcons.Snow,
    color: 'blue',
    description: 'Snow'
  }]
]);

