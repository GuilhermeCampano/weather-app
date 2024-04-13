export function celsiusToFahrenheit(celsius: number): number {
  return celsius * 9 / 5 + 32;
}

export function kilometersPerHourToMilesPerHour(kmh: number): number {
  return kmh / 1.609344;
}

export function getTemperatureFormatted(temperature: number, units: string, decimals = 0): string {
  const isFahrenheit = units === 'imperial';
  const temperatureNumber = isFahrenheit ? celsiusToFahrenheit(temperature) : temperature;
  return temperatureNumber.toFixed(decimals) + '°';
};

export function getSpeedFormatted(speed: number, units: string, decimals = 0): string {
  const isMiles = units === 'imperial';
  const speedNumber = isMiles ? kilometersPerHourToMilesPerHour(speed) : speed;
  return speedNumber.toFixed(decimals) + (isMiles ? ' mph' : ' km/h');
}