import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FundamentalsPageComponent } from './pages/fundamentals-page/fundamentals-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';
const routes: Routes = [
  { 
    path: '', component: ProductsComponent 
  },
  {
    path:'fundamentals', component: FundamentalsPageComponent
  },
  { 
    path:'numbers', component: NumbersPageComponent
  },
  { 
    path:'uncommon', component: UncommonPageComponent
  },
  { 
    path:'custom', component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
