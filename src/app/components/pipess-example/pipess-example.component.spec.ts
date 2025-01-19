import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipessExampleComponent } from './pipess-example.component';

describe('PipessExampleComponent', () => {
  let component: PipessExampleComponent;
  let fixture: ComponentFixture<PipessExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipessExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
