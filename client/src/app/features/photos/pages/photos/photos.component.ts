import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Array<any> = [];
  page!: number;
  constructor(private service: PhotosService) { }

  async ngOnInit() {
    const fotos: any = await this.service.getAll();
    console.log(fotos);
    this.photos = fotos;
  }

}
