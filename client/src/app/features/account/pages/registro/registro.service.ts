import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService extends BaseService {

  new(obj: any) {
    this.setEndPoint('registro');
    return this.post(obj)
  }
}
