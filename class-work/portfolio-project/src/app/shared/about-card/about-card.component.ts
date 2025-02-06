import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
 @Input() title: string = ''; 
 @Input() text1: string = ''; 
 @Input() text2: string = ''; 
 @Input() image: string = ''; 
}
