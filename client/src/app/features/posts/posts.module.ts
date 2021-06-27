import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './pages/post/post.component'

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxPaginationModule,
    HttpClientModule,

  ],
  exports: [PostComponent]
})
export class PostsModule { }
