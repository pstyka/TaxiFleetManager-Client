import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CarService } from '../../../services/services/car.service';

@Component({
  selector: 'app-delete-car-dialog',
  templateUrl: './delete-car-dialog.component.html',
  styleUrls: ['./delete-car-dialog.component.scss']
})
export class DeleteCarDialogComponent {
  deleteCarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteCarDialogComponent>,
    private carService: CarService
  ) {
    this.deleteCarForm = this.fb.group({
      carId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.deleteCarForm.valid) {
      const carId = this.deleteCarForm.value.carId;
      this.carService.deleteCar({ carId }).subscribe({
        next: () => {
          this.dialogRef.close(true);
          console.log('Car deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting car: ', err);
          this.dialogRef.close(false);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
