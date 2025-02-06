import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { IAboutinput } from './interfaces/aboutinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, MultiSelectComponent, NavBarComponent, ProfileComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo2';
  aboutMeDetails: IAboutinput = 
    {
      icon: 'assets/education.png',
      alt: 'Experience icon',
    };

  onDetailClicked(detailType: string) {
    console.log(`${detailType} detail was clicked!`);
  }
}
