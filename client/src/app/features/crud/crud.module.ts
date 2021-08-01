import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, NewProductComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProductsComponent, ProductComponent]
})
export class CrudModule { }
