import { Component } from '@angular/core';
import {CarDto} from "../../services/models/car-dto";
import {CarService} from "../../services/services/car.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  cars: CarDto[] = [];
  constructor(private carService: CarService){}

  ngOnInit(){
    this.carService.getCars().subscribe({
      next: (data) =>
        this.cars = data,
      error: (error) =>
        console.error('Error during fetching cars:', error)
      });
    }
}
