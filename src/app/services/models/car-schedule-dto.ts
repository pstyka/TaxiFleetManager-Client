/* tslint:disable */
/* eslint-disable */
import { ScheduleDetailsDto } from '../models/schedule-details-dto';
export interface CarScheduleDto {
  brand?: string;
  model?: string;
  registrationNumber?: string;
  scheduleDTOS?: ScheduleDetailsDto[];
}
