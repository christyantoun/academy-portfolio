import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { SectionComponent } from "./shared/section/section.component";
import { AboutComponent } from "./shared/about/about.component";
import { ProjectsSectionComponent } from "./shared/projects-section/projects-section.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SectionComponent, AboutComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fatmeh-Demo';
}
