import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent} from './pages/product/product.component';

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
    path:'update'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
