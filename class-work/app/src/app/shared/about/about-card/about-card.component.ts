import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
  @Input() img: string = '';
  @Input() imgText: string = ''; 
  @Input() title: string = '';
  @Input() paragraph1: string = '';
  @Input() paragraph2: string = '';
}
