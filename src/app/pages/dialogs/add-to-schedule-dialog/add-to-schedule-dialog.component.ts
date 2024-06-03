import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleControllerService } from '../../../services/services/schedule-controller.service';
import {DriverService} from "../../../services/services/driver.service";
import {CarService} from "../../../services/services/car.service";

@Component({
  selector: 'app-add-to-schedule-dialog',
  templateUrl: './add-to-schedule-dialog.component.html',
  styleUrls: ['./add-to-schedule-dialog.component.scss']
})
export class AddToScheduleDialogComponent {
  scheduleForm: FormGroup;
  users: any[] = [];
  cars: any[] = [];
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  shifts: string[] = ['DAY', 'NIGHT', 'FULL_DAY'];
  dates: string[] = [];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddToScheduleDialogComponent>,
    private scheduleService: ScheduleControllerService,
    private driverService: DriverService,
    private carService: CarService
  ) {
    this.scheduleForm = this.fb.group({
      userId: ['', Validators.required],
      carId: ['', Validators.required],
      date: ['', Validators.required],
      day: ['', Validators.required],
      shift: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.fetchUsers();
    this.fetchCars();
    this.generateDates();
  }
  fetchUsers(): void {
    this.driverService.getDrivers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users: ', err)
    });
  }

  fetchCars(): void {
    this.carService.getCars().subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Error fetching cars: ', err)
    });
  }
  generateDates(): void {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday of the current week
    for (let i = 0; i < 14; i++) { // 7 days of this week + 7 days of next week
      const nextDate = new Date(startOfWeek);
      nextDate.setDate(startOfWeek.getDate() + i);
      this.dates.push(nextDate.toISOString().split('T')[0]);
    }
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      const scheduleData = this.scheduleForm.value;
      console.log("Schedule Data: ", scheduleData); // Log data to verify

      this.scheduleService.addToSchedule({ body: scheduleData }).subscribe({
        next: () => this.dialogRef.close(true),
        error: (err) => console.error('Error adding to schedule: ', err)
      });
    }
  }


  onCancel(): void {
    this.dialogRef.close(false);
  }
}
