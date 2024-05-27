import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarsComponent } from './pages/cars/cars.component';
import {HttpClientModule} from "@angular/common/http";
import { DriversComponent } from './pages/drivers/drivers.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReportAvailabilityComponent } from './pages/report-availability/report-availability.component';
import {DatePipe} from "@angular/common";

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CarsComponent,
    DriversComponent,
    ScheduleComponent,
    ProfileComponent,
    ReportAvailabilityComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
