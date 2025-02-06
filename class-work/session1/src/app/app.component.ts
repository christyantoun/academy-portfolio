import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component'
import { HeroComponent } from './features/components/hero/hero.component'
import { AboutMeComponent } from './features/components/about-me/about-me.component'
import { MyProjectsComponent } from './features/components/my-projects/my-projects.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutMeComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'session1';
}
