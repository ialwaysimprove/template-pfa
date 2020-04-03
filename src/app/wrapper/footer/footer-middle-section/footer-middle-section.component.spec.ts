import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMiddleSectionComponent } from './footer-middle-section.component';

describe('FooterMiddleSectionComponent', () => {
  let component: FooterMiddleSectionComponent;
  let fixture: ComponentFixture<FooterMiddleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMiddleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
