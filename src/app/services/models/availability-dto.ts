/* tslint:disable */
/* eslint-disable */
export interface DayAvailability {
  day: string;
  shift: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  date: string;
}

export interface AvailabilityDto {
  id?: string;
  userId?: string;
  week: number;
  days: DayAvailability[];
}
