import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BannerComponentComponent } from './banner-component/banner-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BannerComponentComponent,
    FooterComponentComponent,
    DisplayComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
