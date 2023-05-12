import { Component, OnInit } from '@angular/core';
import { ProductService } from '../prod/serv/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  datas: any;

  length:any;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  showPageSizeOptions = true;
  showFirstLastButtons = true;

  pageEvent:any =  PageEvent;

  constructor(private ds: ProductService,private router:Router,private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.datas = this.ds.viewallprod();
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
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
