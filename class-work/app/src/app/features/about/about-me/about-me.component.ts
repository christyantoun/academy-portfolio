import { Component } from '@angular/core';
import { AboutCardComponent } from '../../../shared/about/about-card/about-card.component';

@Component({
  selector: 'app-about-me',
  imports: [
    AboutCardComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}