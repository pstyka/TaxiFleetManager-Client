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
import { AdminComponent } from './pages/admin/admin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from "@angular/material/dialog";
import { AssignDriverDialogComponent } from './pages/dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { ScheduleDialogComponent } from './pages/dialogs/schedule-dialog/schedule-dialog.component';
import { AddCarDialogComponent } from './pages/dialogs/add-car-dialog/add-car-dialog.component';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { CarDialogComponent } from './pages/dialogs/car-dialog/car-dialog.component';
import { DriverDialogComponent } from './pages/dialogs/driver-dialog/driver-dialog.component';
import { AvailabilityDialogComponent } from './pages/dialogs/availability-dialog/availability-dialog.component';
import {MatList, MatListItem} from "@angular/material/list";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { DeleteCarDialogComponent } from './pages/dialogs/delete-car-dialog/delete-car-dialog.component';
import { DeleteDriverDialogComponent } from './pages/dialogs/delete-driver-dialog/delete-driver-dialog.component';
import {EditCarDialogComponent} from "./pages/dialogs/edit-car-dialog/edit-car-dialog.component";
import { AddToScheduleDialogComponent } from './pages/dialogs/add-to-schedule-dialog/add-to-schedule-dialog.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CarsComponent,
    DriversComponent,
    ScheduleComponent,
    ProfileComponent,
    ReportAvailabilityComponent,
    AdminComponent,
    AssignDriverDialogComponent,
    ScheduleDialogComponent,
    AddCarDialogComponent,
    CarDialogComponent,
    DriverDialogComponent,
    AvailabilityDialogComponent,
    DeleteCarDialogComponent,
    DeleteDriverDialogComponent,
    EditCarDialogComponent,
    AddToScheduleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError,
    MatLabel,
    MatOption,
    MatSelect,
    MatList,
    MatListItem,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  providers: [
    provideClientHydration(),
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
