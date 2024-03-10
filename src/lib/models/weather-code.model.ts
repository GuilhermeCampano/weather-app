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
  wmoCode?: number;
  wmoCodeDescription?: string;
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

export const WMOCodesMeaning = [
  'Cloud development not observed or not observable',
  'Clouds generally dissolving or becoming less developed',
  'State of sky on the whole unchanged',
  'Clouds generally forming or developing',
  'Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes',
  'Haze',
  'Widespread dust in suspension in the air, not raised by wind at or near the station at the time of observation',
  'Dust or sand raised by wind at or near the station at the time of observation, but no well-developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen',
  'Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding hour or at the time of observation, but no duststorm or sandstorm',
  'Duststorm or sandstorm within sight at the time of observation, or at the station during the preceding hour',
  'Mist',
  'Patches shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres on land or 10 metres at sea',
  'More or less continuous',
  'Lightning visible, no thunder heard',
  'Precipitation within sight, not reaching the ground or the surface of the sea',
  'Precipitation within sight, reaching the ground or the surface of the sea, but distant, i.e. estimated to be more than 5 km from the station',
  'Precipitation within sight, reaching the ground or the surface of the sea, near to, but not at the station',
  'Thunderstorm, but no precipitation at the time of observation',
  'Squalls at or within sight of the station during the preceding hour or at the time of observation',
  'Funnel cloud(s) Tornado cloud or water-spout.',
  'Drizzle (not freezing) or snow grains not falling as shower(s)',
  'Rain (not freezing)',
  'Snow',
  'Rain and snow or ice pellets',
  'Freezing drizzle or freezing rain',
  'Shower(s) of rain',
  'Shower(s) of snow, or of rain and snow',
  'Shower(s) of hail*, or of rain and hail*',
  'Fog or ice fog',
  'Thunderstorm (with or without precipitation)',
  'Duststorm, sandstorm, drifting or blowing snow',
  'Slight or moderate duststorm or sandstorm',
  'Slight or moderate duststorm or sandstorm',
  'Slight or moderate duststorm or sandstorm',
  'Severe duststorm or sandstorm',
  'Severe duststorm or sandstorm',
  'Slight or moderate blowing snow',
  'Heavy drifting snow',
  'Slight or moderate blowing snow',
  'Heavy drifting snow',
  'Fog or ice fog at a distance at the time of observation',
  'Fog or ice fog in patches',
  'Fog or ice fog, sky visible has become thinner during the preceding hour',
  'Fog or ice fog, sky invisible',
  'Fog or ice fog, sky visible no appreciable change during the preceding hour',
  'Fog or ice fog, sky invisible',
  'Fog or ice fog, sky visible has begun or has become thicker during the preceding hour',
  'Fog or ice fog, sky invisible',
  'Fog, depositing rime, sky visible',
  'Fog, depositing rime, sky invisible',
  'Drizzle, not freezing, intermittent slight at the time of observation',
  'Drizzle, not freezing, continuous',
  'Drizzle, not freezing, intermittent moderate at the time of observation',
  'Drizzle, not freezing, continuous',
  'Drizzle, not freezing, intermittent heavy (dense) at the time of observation',
  'Drizzle, not freezing, continuous',
  'Drizzle, freezing, slight',
  'Drizzle, freezing, moderate or heavy (dense)',
  'Drizzle and rain, slight',
  'Drizzle and rain, moderate or heavy',
  'Rain, not freezing, intermittent slight at the time of observation',
  'Rain, not freezing, continuous',
  'Rain, not freezing, intermittent moderate at the time of observation',
  'Rain, not freezing, continuous',
  'Rain, not freezing, intermittent heavy at the time of observation',
  'Rain, not freezing, continuous',
  'Rain, freezing, slight',
  'Rain, freezing, moderate or heavy (dense)',
  'Rain or drizzle and snow, slight',
  'Rain or drizzle and snow, moderate or heavy',
  //70-79
  'Intermittent fall of snowflakes slight at time of observation',
  'Continuous fall of snowflakes',
  'Intermittent fall of snowflakes moderate at time of observation',
  'Continuous fall of snowflakes',
  'Intermittent fall of snowflakes heavy at time of observation',
  'Continuous fall of snowflakes',
  'Diamond dust (with or without fog)',
  'Snow grains (with or without fog)',
  'Isolated star-like snow crystals (with or without fog)',
  'Ice pellets',
  //80-89
  'Rain shower(s), slight',
  'Rain shower(s), moderate or heavy',
  'Rain shower(s), violent',
  'Shower(s) of rain and snow mixed, slight',
  'Shower(s) of rain and snow mixed, moderate or heavy',
  'Snow shower(s), slight',
  'Snow shower(s), moderate or heavy',
  'Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed',
  'Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed',
  'Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder',
  'Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder',
  //90-99
  'Slight rain at time of observation',
  'Moderate or heavy rain at time of observation',
  'Slight snow, or rain and snow mixed or hail** at time of observation',
  'Moderate or heavy snow, or rain and snow mixed or hail** at time of observation',
  'Thunderstorm, slight or moderate, without hail** but with rain and/or snow at time of observation',
  'Thunderstorm, slight or moderate, with hail** at time of observation',
  'Thunderstorm, heavy, without hail** but with rain and/or snow at time of observation',
  'Thunderstorm combined with duststorm or sandstorm at time of observation',
  'Thunderstorm, heavy, with hail** at time of observation'
];