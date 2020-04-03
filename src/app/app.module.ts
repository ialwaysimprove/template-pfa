import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderContainerComponent } from './wrapper/header-container/header-container.component';
import { IntroBannerComponent } from './wrapper/intro-banner/intro-banner.component';
import { ContentComponent } from './wrapper/content/content.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { HeaderComponent } from './wrapper/header-container/header/header.component';
import { LeftSideContentComponent } from './wrapper/header-container/header/left-side-content/left-side-content.component';
import { RightSideContentComponent } from './wrapper/header-container/header/right-side-content/right-side-content.component';
import { IntroBannerContainerComponent } from './wrapper/intro-banner/intro-banner-container/intro-banner-container.component';
import { IntroHeadlineComponent } from './wrapper/intro-banner/intro-banner-container/intro-headline/intro-headline.component';
import { SearchBarComponent } from './wrapper/intro-banner/intro-banner-container/search-bar/search-bar.component';
import { StatsComponent } from './wrapper/intro-banner/intro-banner-container/stats/stats.component';
import { FooterTopSectionComponent } from './wrapper/footer/footer-top-section/footer-top-section.component';
import { FooterMiddleSectionComponent } from './wrapper/footer/footer-middle-section/footer-middle-section.component';
import { FooterCopyrightsSectionComponent } from './wrapper/footer/footer-copyrights-section/footer-copyrights-section.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    PopupComponent,
    HeaderContainerComponent,
    IntroBannerComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideContentComponent,
    RightSideContentComponent,
    IntroBannerContainerComponent,
    IntroHeadlineComponent,
    SearchBarComponent,
    StatsComponent,
    FooterTopSectionComponent,
    FooterMiddleSectionComponent,
    FooterCopyrightsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
