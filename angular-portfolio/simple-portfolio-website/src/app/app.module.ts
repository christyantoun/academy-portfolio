import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HeroComponent,
    AboutMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
