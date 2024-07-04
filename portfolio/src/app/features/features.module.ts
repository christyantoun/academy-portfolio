import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProjectsComponent,
    ProfileComponent,
    AboutComponent
  ]
})
export class FeaturesModule { }
