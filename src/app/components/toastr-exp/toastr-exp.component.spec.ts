import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrExpComponent } from './toastr-exp.component';

describe('ToastrExpComponent', () => {
  let component: ToastrExpComponent;
  let fixture: ComponentFixture<ToastrExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastrExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastrExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
