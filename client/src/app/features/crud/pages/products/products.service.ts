import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  all() {
    this.setEndPoint('productos/all');
    return this.get();
  }
  single(id: number) {
    this.setEndPoint(`productos/single/${id}`);
    return this.get();
  }
  deleted(id: number, obj:any) {
     this.setEndPoint(`productos/modify/${id}`);
    return this.put(obj);
  }
  create(obj:any) {
    this.setEndPoint(`productos/new/${obj}`);
  }
}
