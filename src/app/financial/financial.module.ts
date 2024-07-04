import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { FinancialRoutingModule } from './financial-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    BannerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FinancialRoutingModule,
    ReactiveFormsModule
  ]
})
export class FinancialModule { }
