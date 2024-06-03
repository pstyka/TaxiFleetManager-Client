import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDriverDialogComponent } from './delete-driver-dialog.component';

describe('DeleteDriverDialogComponent', () => {
  let component: DeleteDriverDialogComponent;
  let fixture: ComponentFixture<DeleteDriverDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDriverDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteDriverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
