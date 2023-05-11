import { Component, OnInit } from '@angular/core';
import { Data } from '../datas';
import { ProductService } from '../prod/serv/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  datas: any;
  toast:any
  pop:Boolean = false;

  constructor(private ds: ProductService,private router:Router,private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.datas = this.ds.viewallprod();
  }

  addcart(product: any, index: number) {
    if (product || index) {
      const cartadd = this.ds.addcart(product);
      if (cartadd == 'Added') {
        this.snackbar.open('Product Added to Cart','close',{
          duration:2*1000
        })
      } else {
        this.snackbar.open('Already Existing Product','close',{
          duration:2*1000
        })
      }

    }
  }

  viewprod(id: number) {
    this.router.navigate(['/product'],{queryParams:{id:id}})
  }
}
