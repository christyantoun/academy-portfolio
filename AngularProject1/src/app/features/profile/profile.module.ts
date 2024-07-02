import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [ProfileSummaryComponent, AboutMeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProfileSummaryComponent, AboutMeComponent]
})
export class ProfileModule { }
