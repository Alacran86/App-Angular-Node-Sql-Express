import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loaded: boolean = false;
  products: Array<any> = [];
  constructor(private service: ProductsService) { }

  async ngOnInit() {
    this.loaded = true;
    this.loadProductos();
    setTimeout(() => this.loaded = true, 3000);
  }
  async loadProductos() {
    const products: any = await this.service.all();
    console.log(products);
    this.products = products;
    console.log(this.products);
  }

}
