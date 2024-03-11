import { type WeatherCodeDetails, WeatherMaterialIcons } from '../models';

const ClearSky: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.ClearSky,
  color: 'yellow',
  label: 'Clear sky'
};

const PartlyCloudy: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.PartlyCloudy,
  color: 'yellow',
  label: 'Partly cloudy'
};

const Cloudy: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Cloudy,
  color: 'blue',
  label: 'Cloudy'
};

const Fog: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Fog,
  color: 'blue',
  label: 'Fog'
};

const Drizzle: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Drizzle,
  color: 'blue',
  label: 'Drizzle'
};

const Rain: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Rain,
  color: 'blue',
  label: 'Rain'
};

const Snow: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Snow,
  color: 'blue',
  label: 'Snow'
};

const Thunderstorm: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Thunderstorm,
  color: 'blue',
  label: 'Thunderstorm'
};

const Windy: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Windy,
  color: 'blue',
  label: 'Windy'
};

const Haze: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Mist,
  color: 'blue',
  label: 'Haze'
};

const Mist: WeatherCodeDetails = {
  icon: WeatherMaterialIcons.Mist,
  color: 'blue',
  label: 'Mist'
};

export const WeatherCodeDetailsMap: Record<number, WeatherCodeDetails> = {
  0: ClearSky,
  1: Cloudy,
  2: PartlyCloudy,
  3: PartlyCloudy,
  4: Cloudy,
  5: Haze,
  6: Windy,
  7: Windy,
  8: Windy,
  9: Windy,
  10: Mist,
  11: Fog,
  12: Fog,
  13: Thunderstorm,
  14: Rain,
  15: Rain,
  16: Rain,
  17: Thunderstorm,
  18: Rain,
  19: Windy,
  20: Rain,
  21: Rain,
  22: Snow,
  23: Snow,
  24: Drizzle,
  25: Drizzle,
  26: Rain,
  27: Rain,
  28: Fog,
  29: Thunderstorm,
  30: Windy,
  31: Windy,
  32: Windy,
  33: Windy,
  34: Windy,
  35: Windy,
  36: Snow,
  37: Snow,
  38: Snow,
  39: Snow,
  40: Fog,
  41: Fog,
  42: Fog,
  43: Fog,
  44: Fog,
  45: Fog,
  46: Fog,
  47: Fog,
  48: Fog,
  49: Fog,
  50: Drizzle,
  51: Drizzle,
  52: Drizzle,
  53: Drizzle,
  54: Drizzle,
  55: Drizzle,
  56: Drizzle,
  57: Drizzle,
  58: Drizzle,
  59: Drizzle,
  60: Rain,
  61: Rain,
  62: Rain,
  63: Rain,
  64: Rain,
  65: Rain,
  66: Rain,
  67: Rain,
  68: Rain,
  69: Rain,
  70: Snow,
  71: Snow,
  72: Snow,
  73: Snow,
  74: Snow,
  75: Snow,
  76: Snow,
  77: Snow,
  78: Snow,
  79: Snow,
  80: Rain,
  81: Rain,
  82: Rain,
  83: Rain,
  84: Rain,
  85: Snow,
  86: Snow,
  87: Snow,
  88: Snow,
  89: Snow,
  90: Snow,
  91: Rain,
  92: Rain,
  93: Rain,
  94: Rain,
  95: Thunderstorm,
  96: Thunderstorm,
  97: Thunderstorm,
  98: Thunderstorm,
  99: Thunderstorm
};
