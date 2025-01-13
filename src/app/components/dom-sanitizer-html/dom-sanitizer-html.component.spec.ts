import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizerHTMLComponent } from './dom-sanitizer-html.component';

describe('DomSanitizerHTMLComponent', () => {
  let component: DomSanitizerHTMLComponent;
  let fixture: ComponentFixture<DomSanitizerHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomSanitizerHTMLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomSanitizerHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
