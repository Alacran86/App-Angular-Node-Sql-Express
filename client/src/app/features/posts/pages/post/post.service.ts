import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService  {
  getAll(){
    this.setEndPoint('post');
    return this.get();
  }


}
