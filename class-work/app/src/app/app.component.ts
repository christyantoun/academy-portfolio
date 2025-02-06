import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProfileIntroComponent } from './features/profile/profile-intro/profile-intro.component';
import { AboutMeComponent } from './features/about/about-me/about-me.component';
import { ProjectsComponent } from './features/all-projects/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent,
    ProfileIntroComponent,
    AboutMeComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}