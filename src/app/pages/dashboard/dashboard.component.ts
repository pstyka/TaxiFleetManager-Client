import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SearchService } from "../../services/services/search.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabTitle: string = 'Dashboard';

  constructor(private searchService: SearchService, private authService: AuthService, private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTabTitleBasedOnUrl(event.urlAfterRedirects);
      }
    });
  }

  updateTabTitleBasedOnUrl(url: string) {
    if (url.includes('availability')) {
      this.tabTitle = 'Availability Form';
    } else if (url.includes('profile')) {
      this.tabTitle = 'Profile';
    } else if (url.includes('cars')) {
      this.tabTitle = 'Cars';
    } else if (url.includes('drivers')) {
      this.tabTitle = 'Drivers';
    } else if (url.includes('schedule')) {
      this.tabTitle = 'Schedule';
    } else {
      this.tabTitle = 'Dashboard';
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.setSearchQuery(input?.value || '');
  }

  logout(): void {
    this.authService.logout();
  }
}

