import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarService } from '../../../services/services/car.service';
import { CarDto } from '../../../services/models/car-dto';

@Component({
  selector: 'app-edit-car-dialog',
  templateUrl: './edit-car-dialog.component.html',
  styleUrls: ['./edit-car-dialog.component.scss']
})
export class EditCarDialogComponent {
  carForm: FormGroup;
  isIdEntered: boolean = false;
  car: CarDto | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCarDialogComponent>,
    private carService: CarService
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      brand: [''],
      model: [''],
      registrationNumber: [''],
      color: [''],
      productionYear: [''],

      mileage: [''],
      imageUrl: ['']
    });
  }

  fetchCar(): void {
    const carId = this.carForm.get('id')?.value;
    if (carId) {
      this.carService.getCarById({ carId }).subscribe({
        next: (car) => {
          this.car = car;
          this.isIdEntered = true;
          this.carForm.patchValue({
            brand: car.brand || '',
            model: car.model || '',
            registrationNumber: car.registrationNumber || '',
            color: car.color || '',
            productionYear: car.productionYear || '',
            mileage: car.mileage?.toString() || '',
            imageUrl: car.imageUrl || ''
          });
        },
        error: (err) => console.error('Error fetching car: ', err)
      });
    }
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const car: CarDto = this.carForm.value;
      if (car.id) {  // Upewnij się, że car.id nie jest undefined
        this.carService.updateCarPatchById({ carId: car.id!, body: car }).subscribe({
          next: () => this.dialogRef.close(true),
          error: (err) => console.error('Error updating car: ', err)
        });
      }
    }
  }


  onCancel(): void {
    this.dialogRef.close(false);
  }
}
