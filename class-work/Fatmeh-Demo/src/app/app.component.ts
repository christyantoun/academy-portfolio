import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { SectionComponent } from "./shared/section/section.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fatmeh-Demo';
}
