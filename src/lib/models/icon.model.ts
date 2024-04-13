export enum IconSizes {
  small = '1rem',
  default = '1.5rem',
  medium = '2rem',
  large = '3rem'
}

export enum IconColors {
  default = 'currentColor',
  yellow = 'var(--color-icon-tertiary)',
  blue = 'var(--color-icon-secondary)',
  orange = 'var(--color-grey)'
}

export interface IconProperties {
  name: string,
  label: string,
  color: keyof typeof IconColors,
  size: keyof typeof IconSizes
}

export type IconName =
  'air' |
  'clear_day' |
  'clear_night' |
  'close' |
  'cloud' |
  'foggy' |
  'gear' |
  'mist' |
  'my_location' |
  'partly_cloudy_day' |
  'partly_cloudy_night' |
  'rainy' |
  'thunderstorm' |
  'weather_mix' |
  'weather_snowy'|
  'thermostat';