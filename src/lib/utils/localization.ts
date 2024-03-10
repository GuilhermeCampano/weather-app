export class Localization {

  /**
   * Formats a date to display the time in 'HH:MM' format
   * @example 2022-01-01T14:00:00Z' => '14:00'
   */
  static formatHourMinute(hour: Date | string, locale = 'en-US'): string {
    return new Date(hour).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  /** 
   Formats a date to display the day of the week
    @example 2022-01-01T14:00:00Z' => 'Saturday'
   */
  static formatDayOfWeek(day: Date | string, locale = 'en-US'): string {
    return new Date(day).toLocaleDateString(locale, { weekday: 'long' });
  }
}