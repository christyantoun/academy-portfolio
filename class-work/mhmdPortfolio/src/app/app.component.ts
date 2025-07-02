import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./pages/hero/hero.component";
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from "./pages/about/about.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mhmdPortfolio';
}
