import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './second/header/header.component';
import { AddFormComponent } from './first/add-form/add-form.component';
import { ShowComponent } from './first/show/show.component';
import { AllProductComponent } from './second/all-product/all-product.component';
import { ProductComponent } from './second/product/product.component';
import { CartComponent } from './second/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ShowComponent,
    HeaderComponent,
    AllProductComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
