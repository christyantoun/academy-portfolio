import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    AboutMeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports: [
    ProjectsComponent,
    AboutMeComponent,
    ProfileComponent
   
  ]
})
export class FeaturesModule { }
