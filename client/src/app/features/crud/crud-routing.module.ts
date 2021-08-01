import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent} from './pages/product/product.component';
import { NewProductComponent} from './pages/new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
   path: 'update/:id',
   component: ProductComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
