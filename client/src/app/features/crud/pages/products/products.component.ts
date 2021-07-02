import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loaded: boolean = false;
  products: Array<any> = [];
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) { }

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
  deleteProduct(id: number) {
    console.log(id);
    this.service.deleted(id);


}
}
