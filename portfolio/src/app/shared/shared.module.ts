import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AboutCardComponent } from './about-card/about-card.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    AboutCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectCardComponent,
    AboutCardComponent
  ]
})
export class SharedModule { }
