import { WMOCodesMeaningDictionary, WeatherCodeDetailsMap } from "$lib/constants";
import type { IconColor, WeatherCodeDetails, WeatherMaterialIcons } from "$lib/models";

export class WeatherCodeDetailsFactory implements WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: IconColor;
  label: string;
  wmoCode: number;
  wmoCodeDescription: string;

  constructor(wmoCode: number) {
    const {icon, color, label } = WeatherCodeDetailsMap[wmoCode];
    const wmoCodeDescription = WMOCodesMeaningDictionary[wmoCode];
    this.icon = icon;
    this.color = color;
    this.label = label;
    this.wmoCode = wmoCode;
    this.wmoCodeDescription = wmoCodeDescription;
  }
}