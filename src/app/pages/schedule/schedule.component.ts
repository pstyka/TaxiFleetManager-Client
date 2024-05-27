import { Component, OnInit } from '@angular/core';
import { CarScheduleDto } from "../../services/models/car-schedule-dto";

import { ScheduleDetailsDto } from "../../services/models/schedule-details-dto";
import {ScheduleControllerService} from "../../services/services/schedule-controller.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  cars: CarScheduleDto[] = [];
  weekDates: { date: string, day: string }[] = [];

  constructor(private scheduleService: ScheduleControllerService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe((data) => {
      this.cars = data;
      this.setWeekDates();
    });
  }

  setWeekDates(): void {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);

    startOfWeek.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    this.weekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return { date: date.toISOString().split('T')[0], day: this.getDayOfWeek(date) };
    });
  }

  getDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  getScheduleForDate(car: CarScheduleDto, date: string, shift: string): ScheduleDetailsDto[] {
    return car.scheduleDTOS
      ? car.scheduleDTOS.filter(schedule =>
        schedule.date && schedule.date.startsWith(date) && schedule.shift === shift)
      : [];
  }
}
