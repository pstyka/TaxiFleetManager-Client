import { Component, OnInit } from '@angular/core';
import { CarDto } from "../../services/models/car-dto";
import { CarService } from "../../services/services/car.service";
import {SearchService} from "../../services/services/search.service";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: CarDto[] = [];
  filteredCars: CarDto[] = [];

  constructor(private carService: CarService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (data) => {
        this.cars = data;
        this.filteredCars = data;
      },
      error: (error) => {
        console.error('Error during fetching cars:', error);
      }
    });

    this.searchService.searchQuery$.subscribe(query => {
      this.filterCars(query);
    });
  }

  private filterCars(query: string): void {
    this.filteredCars = this.cars.filter(car =>
      car.brand.toLowerCase().includes(query.toLowerCase()) ||
      car.model.toLowerCase().includes(query.toLowerCase()) ||
      car.registrationNumber.toLowerCase().includes(query.toLowerCase())
    );
  }
}
