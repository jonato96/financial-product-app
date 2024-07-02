import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'financial',
    loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule)
  },
  {
    path: '**',
    redirectTo: 'financial'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
