import { WMOCodesMeaningList, WeatherCodeDetailsList } from "$lib/constants";
import type { IconColor, WeatherCodeDetails, WeatherMaterialIcons } from "$lib/models";

export class WeatherCodeDetailsFactory implements WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: IconColor;
  label: string;
  wmoCode: number;
  wmoCodeDescription: string;

  constructor(wmoCode: number) {
    const {icon, color, label } = WeatherCodeDetailsList[wmoCode];
    const wmoCodeDescription = WMOCodesMeaningList[wmoCode];
    this.icon = icon;
    this.color = color;
    this.label = label;
    this.wmoCode = wmoCode;
    this.wmoCodeDescription = wmoCodeDescription;
  }
}