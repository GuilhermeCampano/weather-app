import { WMOCodesMeaning, type IconColor, type WeatherMaterialIcons, type WeatherCodeDetails, WeatherCodeDetailsMap, WeatherCodeKey } from "$lib/models";

export class WeatherCodeDetailsFactory implements WeatherCodeDetails {
  wmoCode: number;
  icon: WeatherMaterialIcons;
  color: IconColor;
  label: string;
  wmoCodeDescription: string;

  constructor(wmoCode: number) {
    this.wmoCode = wmoCode;
    this.wmoCodeDescription = WMOCodesMeaning[wmoCode];
    
    const {icon, color, label} = this.geWeatherCodeDetails(wmoCode);
    this.icon = icon;
    this.color = color;
    this.label = label;
  }

  private geWeatherCodeDetails(wmoCodeNumber: number): WeatherCodeDetails {
    for (const lookup of this.weatherCodeLookup) {
      if (lookup.condition(wmoCodeNumber)) {
        return WeatherCodeDetailsMap.get(lookup.code) as WeatherCodeDetails;
      }
    }
    throw new Error('Weather code not found');
  }

  private isClearSky(code: number): boolean {
    return code >= 0 && code <= 1 || code >= 4 && code <= 12;
  }
  private isPartlyCloudy(code: number): boolean {
    return code >= 2 && code <= 3
      || code >= 20 && code <= 28;
  }
  private isCloudy(code: number): boolean {
    return code >= 14 && code <= 19 || code >= 30 && code <= 35;
  }
  private isFoggy(code: number): boolean {
    return code >= 40 && code <= 49;
  }
  private isDrizzle(code: number): boolean {
    return code >= 50 && code <= 59;
  }
  private isRaining(code: number): boolean {
    return code >= 60 && code <= 69
      || code >= 80 && code <= 94;
  }
  private isSnow(code: number): boolean {
    return code >= 36 && code <= 39 ||
      code >= 70 && code <= 79;
  }
  private isThunderstorm(code: number): boolean {
    return code === 13 || code === 17 || code === 29 || code >= 95 && code <= 99;
  }

  private weatherCodeLookup: { condition: (code: number) => boolean, code: WeatherCodeKey }[] = [
    { condition: this.isClearSky, code: WeatherCodeKey.ClearSky },
    { condition: this.isPartlyCloudy, code: WeatherCodeKey.PartlyCloudy },
    { condition: this.isCloudy, code: WeatherCodeKey.Cloudy },
    { condition: this.isThunderstorm, code: WeatherCodeKey.Thunderstorm },
    { condition: this.isRaining, code: WeatherCodeKey.Rain },
    { condition: this.isFoggy, code: WeatherCodeKey.Fog },
    { condition: this.isSnow, code: WeatherCodeKey.Snow },
    { condition: this.isDrizzle, code: WeatherCodeKey.Drizzle },
    { condition: () => true, code: WeatherCodeKey.Cloudy }
  ];
}