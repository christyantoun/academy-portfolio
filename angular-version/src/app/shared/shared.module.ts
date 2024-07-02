import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { ProjectImgComponent } from './project-img/project-img.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';




@NgModule({
  declarations: [
    BtnComponent,
    ProjectImgComponent,
    AboutDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BtnComponent,
    ProjectImgComponent,
    AboutDetailComponent
  ]
})
export class SharedModule { }
