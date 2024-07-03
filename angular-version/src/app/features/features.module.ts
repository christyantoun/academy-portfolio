import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports: [
    ProjectsComponent,
    AboutMeComponent
   
  ]
})
export class FeaturesModule { }
