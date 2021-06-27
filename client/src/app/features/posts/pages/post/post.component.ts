import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Array<any> = [];
  page!: number;
  constructor(private service: PostService) { }

  async ngOnInit() {
    const posteos: any = await this.service.getAll();
    console.log(posteos);
    this.posts = posteos;
  }

}

