import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';


@Injectable({
  providedIn: 'root'
})

export class NewproductService extends BaseService {
  create(obj:any) {
    this.setEndPoint(`productos/create/${obj}`);
    return this.post(obj);
  }

}
