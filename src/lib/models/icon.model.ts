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