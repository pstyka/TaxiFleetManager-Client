import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AvailabilityService } from '../../../services/services/availability.service';
import { AvailabilityDto, DayAvailability } from '../../../services/models/availability-dto';

@Component({
  selector: 'app-availability-dialog',
  templateUrl: './availability-dialog.component.html',
  styleUrls: ['./availability-dialog.component.scss']
})
export class AvailabilityDialogComponent implements OnInit {
  availabilities: AvailabilityDto[] = [];
  displayedColumns: string[] = ['week', 'userId', 'day', 'shift', 'date'];

  constructor(
    private dialogRef: MatDialogRef<AvailabilityDialogComponent>,
    private availabilityService: AvailabilityService
  ) {}

  ngOnInit(): void {
    this.loadAvailabilities();
  }

  loadAvailabilities(): void {
    this.availabilityService.getAvailability().subscribe({
      next: (data) => {
        console.log('Fetched availabilities:', data);
        this.availabilities = data;
        this.flattenAvailabilities();
        console.log('Flattened availabilities:', this.flattenedAvailabilities);
      },
      error: (err) => console.error('Error fetching availabilities: ', err)
    });
  }

  flattenedAvailabilities: any[] = [];

  flattenAvailabilities(): void {
    this.flattenedAvailabilities = [];
    this.availabilities.forEach(availability => {
      availability.days.forEach(day => {
        this.flattenedAvailabilities.push({
          week: availability.week,
          userId: availability.userId,
          day: day.day,
          shift: day.shift,
          date: day.date
        });
      });
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
