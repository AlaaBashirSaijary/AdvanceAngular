import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizerURLComponent } from './dom-sanitizer-url.component';

describe('DomSanitizerURLComponent', () => {
  let component: DomSanitizerURLComponent;
  let fixture: ComponentFixture<DomSanitizerURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomSanitizerURLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomSanitizerURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
