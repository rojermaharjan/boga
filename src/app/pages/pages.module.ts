import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    HomeModule,
    ProfileModule
  ]
})
export class PagesModule { }
