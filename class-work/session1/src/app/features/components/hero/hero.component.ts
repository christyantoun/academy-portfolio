import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  CvText: string =  "Download CV";
  ContactText: string = "Contact info";

  Cv_Clicked(){
    window.open('./assets/resume-example.pdf')
  }
  Contact_Clicked(){
    location.href='./#contact'
  }
}
