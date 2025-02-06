import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent,
    AboutComponent,
    ProjectComponent
  ]
})
export class FeatureModule { }
