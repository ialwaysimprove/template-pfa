import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHeadlineComponent } from './intro-headline.component';

describe('IntroHeadlineComponent', () => {
  let component: IntroHeadlineComponent;
  let fixture: ComponentFixture<IntroHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
