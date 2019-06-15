import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { AlbumModule } from './album/album.module';

@NgModule({
  imports: [
    HomeModule,
    ProfileModule,
    AlbumModule
  ]
})
export class PagesModule { }
