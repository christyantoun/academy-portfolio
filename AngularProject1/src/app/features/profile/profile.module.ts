import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [ProfileSummaryComponent, AboutMeComponent, ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProfileSummaryComponent, AboutMeComponent, ProjectsComponent], 
})
export class ProfileModule { }
