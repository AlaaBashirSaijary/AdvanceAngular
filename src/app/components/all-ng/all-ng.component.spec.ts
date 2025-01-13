import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNgComponent } from './all-ng.component';

describe('AllNgComponent', () => {
  let component: AllNgComponent;
  let fixture: ComponentFixture<AllNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllNgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
