import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-car-dialog',
  template: `
    <h1 mat-dialog-title>Drivers</h1>
    <div mat-dialog-content>
      <app-drivers></app-drivers>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>
    </div>
  `,
})
export class DriverDialogComponent {
  constructor(private dialogRef: MatDialogRef<DriverDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
