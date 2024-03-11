import type { IconColor } from "./icon-color";
import { WeatherMaterialIcons } from "./weather-material-icons";

export interface WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: IconColor;
  label: string;
  wmoCode?: number;
  wmoCodeDescription?: string;
}