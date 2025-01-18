import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmitterComponent } from './main-emitter.component';

describe('MainEmitterComponent', () => {
  let component: MainEmitterComponent;
  let fixture: ComponentFixture<MainEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainEmitterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
