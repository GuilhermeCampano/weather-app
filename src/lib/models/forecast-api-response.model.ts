import type { ForecastCurrentCard, ForecastDayCard, ForecastHourCard } from ".";
import type { ForecastApiMetadata } from "./forecast-api-metadata";

export interface ForecastApiResponse {
  current: ForecastCurrentCard;
  daily: ForecastDayCard[];
  hourly: ForecastHourCard[];
  metadata: ForecastApiMetadata;
}