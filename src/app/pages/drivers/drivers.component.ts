import { Component } from '@angular/core';
import {CarDto} from "../../services/models/car-dto";
import {CarService} from "../../services/services/car.service";
import {UserDto} from "../../services/models/user-dto";
import {DriverService} from "../../services/services/driver.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  drivers: UserDto[] = [];
  constructor(private driverService: DriverService){}

  ngOnInit(){
    this.driverService.getDrivers().subscribe({
      next: (data) =>
        this.drivers = data,
      error: (error) =>
        console.error('Error during fetching drivers:', error)
    });
  }
}
