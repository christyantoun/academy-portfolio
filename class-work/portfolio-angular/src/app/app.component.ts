import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './core/navbar/navbar.component';
import {HomeComponent} from './features/home/home.component';
import {AboutComponent} from './features/about/about.component';
import {ProjectsComponent} from './features/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-angular';

}
