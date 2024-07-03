import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { FinancialRoutingModule } from './financial-routing.module';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
