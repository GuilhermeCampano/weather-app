export enum WeatherCode {
  ClearSky = 'clear-sky',
  PartlyCloudy = 'partly-cloudy',
  Cloudy = 'cloudy',
  Thunderstorm = 'thunderstorm',
  Fog = 'fog',
  Drizzle = 'drizzle',
  Rain = 'rain',
  Snow = 'snow'
}

export enum WeatherMaterialIcons {
  ClearSky = 'clear_day',
  PartlyCloudy = 'partly_cloudy_day',
  Thunderstorm = 'thunderstorm',
  Cloudy = 'cloud',
  Fog = 'foggy',
  Rain = 'rainy',
  Snow = 'weather_snowy',
  Drizzle = 'weather_mix'
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
    color: 'yellow',
    description: 'Partly cloudy'
  }],
  [WeatherCode.Cloudy, {
    code: WeatherCode.Cloudy,
    icon: WeatherMaterialIcons.Cloudy,
    color: 'blue',
    description: 'Cloudy'
  }],
  [WeatherCode.Fog, {
    code: WeatherCode.Fog,
    icon: WeatherMaterialIcons.Fog,
    color: 'blue',
    description: 'Fog'
  }],
  [WeatherCode.Drizzle, {
    code: WeatherCode.Drizzle,
    icon: WeatherMaterialIcons.Drizzle,
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
  }],
  [WeatherCode.Thunderstorm, {
    code: WeatherCode.Thunderstorm,
    icon: WeatherMaterialIcons.Thunderstorm,
    color: 'blue',
    description: 'Thunderstorm'
  }],
]);


export const isClearSky = (code: number): boolean => code >= 0 && code <= 1 || code >= 4 && code <= 12;

export const isPartlyCloudy = (code: number): boolean => 
  code >= 2 && code <= 3 
  || code >= 20 && code <= 28;

export const isCloudy = (code: number): boolean => code >= 14 && code <= 19 || code >= 30 && code <= 35;

export const isThunderstorm = (code: number): boolean => 
  code === 13 || code === 17 || code === 29 || code >= 95 && code <= 99;


export const isRaining = (code: number): boolean => 
  code >= 60 && code <= 69 
  || code >= 80 && code <= 94;

export const isSnow = (code: number): boolean =>
  code >= 36 && code <= 39 ||
  code >= 70 && code <= 79;

export const isFoggy = (code: number): boolean => code >= 40 && code <= 49;

export const isDrizzle = (code: number): boolean => code >= 50 && code <= 59;

export const WeatherCodeLookup: { condition: (code: number) => boolean, code: WeatherCode }[] = [
  { condition: isClearSky, code: WeatherCode.ClearSky },
  { condition: isPartlyCloudy, code: WeatherCode.PartlyCloudy },
  { condition: isCloudy, code: WeatherCode.Cloudy },
  { condition: isThunderstorm, code: WeatherCode.Thunderstorm },
  { condition: isRaining, code: WeatherCode.Rain },
  { condition: isFoggy, code: WeatherCode.Fog },
  { condition: isSnow, code: WeatherCode.Snow },
  { condition: isDrizzle, code: WeatherCode.Drizzle },
  { condition: () => true, code: WeatherCode.Cloudy}
];