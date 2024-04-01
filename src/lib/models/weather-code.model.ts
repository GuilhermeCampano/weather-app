import type { IconColors } from "./icon.model";
import { WeatherMaterialIcons } from "./weather-material-icons";

export interface WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: keyof typeof IconColors;
  label: string;
  wmoCode?: number;
  wmoCodeDescription?: string;
  isDay?: boolean;
}