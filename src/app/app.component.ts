import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ButtonComponent } from './shared/button/button.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectComponent } from './pages/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, LandingComponent,ButtonComponent,AboutMeComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ex1';
}
