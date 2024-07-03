import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projectNum : string='';
  @Input() source : string='';
  @Input() txt : string='';
  @Input() btn1 : string='';
  @Input() btn2 : string='';
  @Input() url1 : string='';
  @Input() url2 : string='';


  getURL(url: string)
{
  window.location.href = url;
}

}
