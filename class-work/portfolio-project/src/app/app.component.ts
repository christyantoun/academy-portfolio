import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProfileComponent, RouterOutlet,ProjectsComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-project';
}
