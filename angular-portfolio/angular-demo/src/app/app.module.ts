import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './features/landing/landing.component';
import { AboutComponent } from './features/about/about.component';
import { ImageComponent } from './shared/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
