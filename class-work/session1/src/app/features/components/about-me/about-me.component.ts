import { Component } from '@angular/core';
import { AboutCardComponent } from '../../../shared/components/about-card/about-card.component';
@Component({
  selector: 'app-about-me',
  imports: [AboutCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
experience_src_img: string = "./assets/experience.png";
education_src_img: string = "./assets/education.png";

experience_alt: string = "Experience icon";
education_alt: string = "Education icon";

expierence_title: string = "Experience";
education_title: string = "Education";

experience_description1: string = "4+ years";
experience_description2: string = "Web Development";
education_description1: string = "B.Sc. Bachelors Degree";
education_description2: string = "University Name"; 

}
