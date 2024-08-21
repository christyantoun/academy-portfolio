import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, AboutComponent, NavbarComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
}
