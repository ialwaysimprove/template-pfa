import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBannerContainerComponent } from './intro-banner-container.component';

describe('IntroBannerContainerComponent', () => {
  let component: IntroBannerContainerComponent;
  let fixture: ComponentFixture<IntroBannerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBannerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
