import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrudRoutingModule } from './crud-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
  ],
  exports: [ProductsComponent, ProductComponent]
})
export class CrudModule { }
