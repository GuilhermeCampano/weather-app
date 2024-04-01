import { WMOCodesMeaningDictionary, WeatherCodeDetailsMap } from "$lib/constants";
import { WeatherMaterialIcons , type WeatherCodeDetails } from "$lib/models";
import type { IconColors } from "$lib/models/icon.model";

export class WeatherCodeDetailsFactory implements WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: keyof typeof IconColors;
  label: string;
  wmoCode: number;
  wmoCodeDescription: string;

  constructor(wmoCode: number, isDay = true) {
    const {icon, color, label } = WeatherCodeDetailsMap[wmoCode];
    const wmoCodeDescription = WMOCodesMeaningDictionary[wmoCode];

    this.icon = isDay ? icon : this.applyNightTheme(icon);
    this.color = color;
    this.label = label;
    this.wmoCode = wmoCode;
    this.wmoCodeDescription = wmoCodeDescription;
  }

  private applyNightTheme(icon: WeatherMaterialIcons): WeatherMaterialIcons {
    const nightIcons = new Map([
      [WeatherMaterialIcons.ClearSky, WeatherMaterialIcons.NightSKy],
      [WeatherMaterialIcons.PartlyCloudy, WeatherMaterialIcons.NightPartlyCloudy]
    ]);
    
    return nightIcons.get(icon) || icon;
  }
}