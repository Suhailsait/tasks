import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './second/all-product/all-product.component';
import { ProductComponent } from './second/product/product.component';
import { CartComponent } from './second/cart/cart.component';

const routes: Routes = [
  {path:"",component:AllProductComponent},
  {path:"product",component:ProductComponent},
  {path:"cart",component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
