import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { ParallaxModule } from 'src/app/components/parallax/parallax.module';

const routes: Routes = [
  {
    path: 'album',
    component: AlbumComponent
  }
];

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    ParallaxModule
  ]
})
export class AlbumModule { }
