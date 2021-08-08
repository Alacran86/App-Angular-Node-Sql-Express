import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})

export class ProductserviceService extends BaseService {
    deleted(id: number, obj:any) {
    this.setEndPoint(`productos/modify/${id}`);
    return this.put(obj);
 }
