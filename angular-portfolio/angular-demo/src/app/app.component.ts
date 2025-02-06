// @ts-ignore
import { Component } from '@angular/core';
// @ts-ignore
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
}
