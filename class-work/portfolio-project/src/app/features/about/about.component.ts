import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCardComponent } from '../../shared/about-card/about-card.component';
@Component({
  selector: 'app-about',
  imports: [AboutCardComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experiences = [
    {
      image: 'assets/experience.png',
      title: 'Experience',
      text1: '4+ years',
      text2: 'Web Development'
    },
    {
      image: 'assets/education.png',
      title: 'Education',
      text1: 'B.Sc. Bachelors Degree',
      text2: 'University Name'
    },
  ]
}
