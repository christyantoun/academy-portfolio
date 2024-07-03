import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrl: './about-detail.component.scss'
})
export class AboutDetailComponent {
  @Input() source : string =''; 
  @Input() text : string ='';
  @Input() title : string ='';
  @Input() desc1 : string ='';
  @Input() desc2 : string ='';

}
