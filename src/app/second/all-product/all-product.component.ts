import { Component, OnInit } from '@angular/core';
import { Data } from '../datas';
import { ProductService } from '../prod/serv/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  datas: any;
  toast:any
  pop:Boolean = false;

  constructor(private ds: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.datas = this.ds.viewallprod();
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

  viewprod(id: number) {
    this.router.navigate(['/product'],{queryParams:{id:id}})
  }
}
