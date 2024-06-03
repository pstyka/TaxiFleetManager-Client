import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DriverService } from '../../../services/services/driver.service';

@Component({
  selector: 'app-delete-driver-dialog',
  templateUrl: './delete-driver-dialog.component.html',
  styleUrls: ['./delete-driver-dialog.component.scss']
})
export class DeleteDriverDialogComponent {
  deleteDriverForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteDriverDialogComponent>,
    private driverService: DriverService
  ) {
    this.deleteDriverForm = this.fb.group({
      driverId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.deleteDriverForm.valid) {
      const driverId = this.deleteDriverForm.value.driverId;
      this.driverService.deleteDriver({ driverId }).subscribe({
        next: () => {
          this.dialogRef.close(true);
          console.log('Driver deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting driver: ', err);
          this.dialogRef.close(false);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
