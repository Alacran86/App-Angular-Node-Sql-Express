import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';


@Injectable({
  providedIn: 'root'
})
export class PhotosService extends BaseService  {
  getAll(){
    this.setEndPoint('photos');
    return this.get();
  }

}
