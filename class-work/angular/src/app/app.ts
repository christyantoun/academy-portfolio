import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar/navbar';
import { Landscape } from './pages/landscape/landscape';
import { Icons } from './pages/icons/icons';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Navbar ,Landscape ,About ,Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular';
}
