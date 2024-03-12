import { WMOCodesMeaningDictionary, WeatherCodeDetailsMap } from "$lib/constants";
import { WeatherMaterialIcons, type IconColor, type WeatherCodeDetails } from "$lib/models";

export class WeatherCodeDetailsFactory implements WeatherCodeDetails {
  icon: WeatherMaterialIcons;
  color: IconColor;
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