import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToScheduleDialogComponent } from './add-to-schedule-dialog.component';

describe('AddToScheduleDialogComponent', () => {
  let component: AddToScheduleDialogComponent;
  let fixture: ComponentFixture<AddToScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToScheduleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
