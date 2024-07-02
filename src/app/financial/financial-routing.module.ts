import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'edit-product',
    component: CreateProductComponent
  },
  {
    path: '**',
    redirectTo: 'list-product'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }