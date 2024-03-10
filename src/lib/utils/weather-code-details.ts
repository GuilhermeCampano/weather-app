import { WeatherCodeDetailsMap, type WeatherCodeDetails, WeatherCode, WeatherMaterialIcons, type IconColor, WMOCodesMeaning } from "$lib/models";


export class WeatherCodeDetailsBuilder implements WeatherCodeDetails {
  wmoCode: number;
  code: WeatherCode;
  icon: WeatherMaterialIcons;
  color: IconColor;
  description: string;
  wmoCodeDescription: string;

  constructor(wmoCode: number) {
    this.wmoCode = wmoCode;
    const details = this.geWeatherCodeDetails(wmoCode);
    this.code = details.code;
    this.icon = details.icon;
    this.color = details.color;
    this.description = details.description;
    this.wmoCodeDescription = WMOCodesMeaning[wmoCode];
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

  private weatherCodeLookup: { condition: (code: number) => boolean, code: WeatherCode }[] = [
    { condition: this.isClearSky, code: WeatherCode.ClearSky },
    { condition: this.isPartlyCloudy, code: WeatherCode.PartlyCloudy },
    { condition: this.isCloudy, code: WeatherCode.Cloudy },
    { condition: this.isThunderstorm, code: WeatherCode.Thunderstorm },
    { condition: this.isRaining, code: WeatherCode.Rain },
    { condition: this.isFoggy, code: WeatherCode.Fog },
    { condition: this.isSnow, code: WeatherCode.Snow },
    { condition: this.isDrizzle, code: WeatherCode.Drizzle },
    { condition: () => true, code: WeatherCode.Cloudy }
  ];
}