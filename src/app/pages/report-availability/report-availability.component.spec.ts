import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAvailabilityComponent } from './report-availability.component';

describe('ReportAvailabilityComponent', () => {
  let component: ReportAvailabilityComponent;
  let fixture: ComponentFixture<ReportAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
