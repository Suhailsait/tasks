import { Component, OnInit } from '@angular/core';
import { ProductService } from '../prod/serv/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartproduct:any;
  cartamt:any = 0;

  constructor(private ds:ProductService) { }

  ngOnInit(): void {
    this.cartproduct = this.ds.cartArray;
    for(let i = 0;i<this.cartproduct.length;i++){
      this.cartamt = this.cartamt+this.cartproduct[i].price
    }
  }

  removeprod(index:any){
    this.ds.cartremove(index);
  }

}
