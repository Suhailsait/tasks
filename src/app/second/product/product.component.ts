import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../prod/serv/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id:any
  datas:any;
  toast:any
  pop:Boolean = false;


  constructor(private route:ActivatedRoute,private ds:ProductService) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.queryParamMap.get('id');
    this.datas = this.ds.viewprod(this.id)
    
  }

  addcart(product: any, index: number) {
    if (product || index) {
      const cartadd = this.ds.addcart(product);
      if (cartadd == 'Added') {
        this.toast = "Product Added to cart"
        this.pop = true;
        setTimeout(() => {
          this.pop = false
        }, 2000);
      } else {
        this.toast = "Already Existing Product"
        this.pop = true;
        setTimeout(() => {
          this.pop = false
        }, 2000);
      }
    }
  }

}
