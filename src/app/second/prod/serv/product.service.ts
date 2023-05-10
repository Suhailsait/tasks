import { Injectable } from '@angular/core';
import { Data } from '../../datas';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  data: any;
  prod: any;
  cartArray: Array<any> = [];
  cartAdding: any;

  constructor() {
    this.data = Data;
  }

  viewallprod(): any {
    return this.data;
  }

  viewprod(id: any): any {
    this.prod = this.data.filter((prod: any) => prod.id == id);
    return this.prod;
  }

  addcart(product: any) {
    if (this.cartArray.length == 0) {
      this.cartArray.push(product);
      this.cartAdding = 'Added';
      return this.cartAdding;
    } else {
      const cartprod = this.cartArray.filter(
        (prod: any) => prod.id === product.id
      );
      if (cartprod.length != 0) {
        this.cartAdding = '';
        return this.cartAdding;
      } else {
        this.cartArray.push(product);
        this.cartAdding = 'Added';
        return this.cartAdding;
      }
    }
  }

  cartremove(index:any){
    this.cartArray.splice(index,1);
  }
}
