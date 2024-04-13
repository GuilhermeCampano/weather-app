export interface UserPreferences {
  theme?: UserPreferencesTheme;
  font?: string;
  language?: string;
  units?: UserPreferencesUnit;
}

export type UserPreferencesTheme = 'light' | 'dark';
export type UserPreferencesUnit = 'imperial' | 'metric';