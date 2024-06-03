import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarsComponent } from './pages/cars/cars.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReportAvailabilityComponent } from './pages/report-availability/report-availability.component';
import {AuthGuard} from "./services/auth.guard";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'cars', component: CarsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'drivers', component: DriversComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'availability', component: ReportAvailabilityComponent },
    ]
  },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
