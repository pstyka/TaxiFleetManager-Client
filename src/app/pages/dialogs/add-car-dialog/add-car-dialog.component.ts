import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {CarService} from "../../../services/services/car.service";
import {CarDto} from "../../../services/models/car-dto";


@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.scss']
})
export class AddCarDialogComponent {
  carForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCarDialogComponent>,
    private carService: CarService
  ) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      color: ['', Validators.required],
      productionYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      mileage: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      wheelState: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log('Form submitted'); // Dodaj to, aby sprawdzić, czy metoda jest wywoływana
    if (this.carForm.valid) {
      const car: CarDto = this.carForm.value;
      this.carService.addCar(car).subscribe({
        next: () => {
          console.log('Car added successfully');
          this.dialogRef.close(true);
        },
        error: (err) => console.error('Error adding car: ', err)
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
