import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCarDialogComponent} from "../dialogs/add-car-dialog/add-car-dialog.component";
import {CarDialogComponent} from "../dialogs/car-dialog/car-dialog.component";
import {DriverDialogComponent} from "../dialogs/driver-dialog/driver-dialog.component";
import {ScheduleDialogComponent} from "../dialogs/schedule-dialog/schedule-dialog.component";
import {AvailabilityDialogComponent} from "../dialogs/availability-dialog/availability-dialog.component";
import {DeleteCarDialogComponent} from "../dialogs/delete-car-dialog/delete-car-dialog.component";
import {DeleteDriverDialogComponent} from "../dialogs/delete-driver-dialog/delete-driver-dialog.component";
import {EditCarDialogComponent} from "../dialogs/edit-car-dialog/edit-car-dialog.component";
import {AddToScheduleDialogComponent} from "../dialogs/add-to-schedule-dialog/add-to-schedule-dialog.component";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(dialogComponent: any): void {
    const dialogRef = this.dialog.open(dialogComponent, {
      width: '1000px',
      height: '800px',
      position: { left:'25%' },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  protected readonly AddCarDialogComponent = AddCarDialogComponent;
  protected readonly CarDialogComponent = CarDialogComponent;
  protected readonly DriverDialogComponent = DriverDialogComponent;
  protected readonly ScheduleDialogComponent = ScheduleDialogComponent;
  protected readonly AvailabilityDialogComponent = AvailabilityDialogComponent;
  protected readonly DeleteCarDialogComponent = DeleteCarDialogComponent;
  protected readonly DeleteDriverDialogComponent = DeleteDriverDialogComponent;
  protected readonly EditCarDialogComponent = EditCarDialogComponent;
  protected readonly AddToScheduleDialogComponent = AddToScheduleDialogComponent;
}
