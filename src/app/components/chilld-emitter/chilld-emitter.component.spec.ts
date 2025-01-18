import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilldEmitterComponent } from './chilld-emitter.component';

describe('ChilldEmitterComponent', () => {
  let component: ChilldEmitterComponent;
  let fixture: ComponentFixture<ChilldEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChilldEmitterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChilldEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
