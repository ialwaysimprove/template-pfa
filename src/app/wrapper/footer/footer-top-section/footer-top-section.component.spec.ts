import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTopSectionComponent } from './footer-top-section.component';

describe('FooterTopSectionComponent', () => {
  let component: FooterTopSectionComponent;
  let fixture: ComponentFixture<FooterTopSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTopSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
