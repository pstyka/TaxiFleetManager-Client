/* tslint:disable */
/* eslint-disable */
export interface AvailabilityDto {
  friday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  id?: string;
  monday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  saturday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  sunday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  thursday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  tuesday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  userId?: string;
  wednesday: 'DAY' | 'NIGHT' | 'FULL_DAY' | 'NONE';
  week: number;
}
