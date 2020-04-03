import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyrightsSectionComponent } from './footer-copyrights-section.component';

describe('FooterCopyrightsSectionComponent', () => {
  let component: FooterCopyrightsSectionComponent;
  let fixture: ComponentFixture<FooterCopyrightsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCopyrightsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopyrightsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
