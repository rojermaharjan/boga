import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ParallaxModule } from 'src/app/components/parallax/parallax.module';
import { BogaTimelineItemModule } from 'src/app/components/boga-timeline-item/boga-timeline-item.module';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    ParallaxModule,
    BogaTimelineItemModule
  ]
})
export class ProfileModule { }
