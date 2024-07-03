import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { ProjectComponent } from './project/project.component';




@NgModule({
  declarations: [
   
    AboutDetailComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  
    AboutDetailComponent,
    ProjectComponent
  ]
})
export class SharedModule { }
