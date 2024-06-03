import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../services/models/user-dto';
import { DriverService } from '../../services/services/driver.service';
import { SearchService } from '../../services/services/search.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: UserDto[] = [];
  filteredDrivers: UserDto[] = [];
  searchQuery: string = '';

  constructor(private driverService: DriverService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe({
      next: (data) => {
        this.drivers = data;
        this.filteredDrivers = data;
      },
      error: (error) => {
        console.error('Error during fetching drivers:', error);
      }
    });

    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.filterDrivers();
    });
  }

  private filterDrivers(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredDrivers = this.drivers.filter(driver =>
      driver.firstName.toLowerCase().includes(query) ||
      driver.lastName.toLowerCase().includes(query)
    );
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.setSearchQuery(input?.value || '');
  }
}
