import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  loaded: boolean = false;
  product: any = {};
  register:any;
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute, private swal: SwalService, private router: Router) { }

  ngOnInit(): void {
    this.loaded = true;
    this.loadProducto();
    setTimeout(() => this.loaded = true, 3000);
  }
  async loadProducto() {
    try {
      const params = this.activatedRoute.snapshot.params.id;
      const result = await this.service.single(params);
      const [producto]: any = result;
      console.log(producto);
      this.product = producto;
    }
    catch (e) {
      this.swal.normalMessage({ html: 'El producto no existe', icon: 'error', timer: 10000 });
      this.router.navigate(["productos"]);
    }
  }

}
