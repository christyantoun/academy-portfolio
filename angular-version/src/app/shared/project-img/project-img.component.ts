import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-img',
  templateUrl: './project-img.component.html',
  styleUrl: './project-img.component.scss'
})
export class ProjectImgComponent {
  @Input() source : string='';
  @Input() txt : string='';




}
