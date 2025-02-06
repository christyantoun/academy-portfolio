import { Component } from '@angular/core';
import { AboutDetail } from '../../models/about-detail.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  aboutDetails: AboutDetail[] = [
    {
      icon: './assets/experience.png',
      title: 'Experience',
      description: '3+ years<br/>Frontend Development'
    },
    {
      icon: './assets/education.png',
      title: 'Education',
      description: 'B.Sc. Bachelors Degree<br/>Lebanese University'
    }
  ];
  
  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
