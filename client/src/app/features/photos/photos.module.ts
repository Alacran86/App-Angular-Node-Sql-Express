import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './pages/photos/photos.component'


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  exports: [PhotosComponent]

})
export class PhotosModule { }
