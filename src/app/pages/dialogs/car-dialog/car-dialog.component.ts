import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-car-dialog',
  template: `
    <h1 mat-dialog-title>Car Details</h1>
    <div mat-dialog-content>
      <app-cars></app-cars>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>
    </div>
  `,
})
export class CarDialogComponent {
  constructor(private dialogRef: MatDialogRef<CarDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
