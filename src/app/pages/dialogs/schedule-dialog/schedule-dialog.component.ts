import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-car-dialog',
  template: `
    <h1 mat-dialog-title>Schedule</h1>
    <div mat-dialog-content>
      <app-schedule></app-schedule>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>
    </div>
  `,
})
export class ScheduleDialogComponent {
  constructor(private dialogRef: MatDialogRef<ScheduleDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
