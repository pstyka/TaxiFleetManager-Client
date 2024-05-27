import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-availability',
  templateUrl: './report-availability.component.html',
  styleUrls: ['./report-availability.component.scss']
})
export class ReportAvailabilityComponent implements OnInit {
  availabilityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private datePipe: DatePipe
  ) {
    this.availabilityForm = this.fb.group({
      week: [''],
      days: this.fb.array(this.createDaysArray())
    });
  }

  ngOnInit(): void {
    this.setNextWeekDates();
  }

  createDaysArray(): FormGroup[] {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => this.fb.group({
      day: [day],
      shift: ['NONE'],
      date: ['']
    }));
  }

  get days(): FormArray {
    return this.availabilityForm.get('days') as FormArray;
  }

  setNextWeekDates(): void {
    const today = new Date();
    const nextMonday = new Date(today.setDate(today.getDate() + (8 - today.getDay()) % 7 || 7));
    const dates = Array.from({ length: 7 }, (_, i) => new Date(nextMonday.getTime() + i * 86400000));

    dates.forEach((date, index) => {
      this.days.at(index).get('date')?.setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
    });

    const weekNumber = this.getWeekNumber(nextMonday);
    this.availabilityForm.get('week')?.setValue(weekNumber);
  }

  onSubmit(): void {
    const formValue = this.availabilityForm.value;

    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.post('http://localhost:8080/api/v1/availability', formValue, { headers }).subscribe(response => {
      console.log('Availability saved', response);
      this.router.navigate(['/dashboard']);
    }, (error: HttpErrorResponse) => {
      console.error('Error saving availability', error);
      if (error.status === 403) {
        alert('You do not have permission to perform this action.');
      }
    });
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
}
