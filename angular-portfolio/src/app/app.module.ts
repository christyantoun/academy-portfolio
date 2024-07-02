import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectCardComponent } from './features/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
