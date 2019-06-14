import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { BogaProductItemModule } from 'src/app/components/boga-product-item/boga-product-item.module';
import { ParallaxModule } from 'src/app/components/parallax/parallax.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    ParallaxModule,
    BogaProductItemModule
  ]
})
export class HomeModule { }
