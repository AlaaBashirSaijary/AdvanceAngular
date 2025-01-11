import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByExpComponent } from './track-by-exp.component';

describe('TrackByExpComponent', () => {
  let component: TrackByExpComponent;
  let fixture: ComponentFixture<TrackByExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackByExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackByExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
