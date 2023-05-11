import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../prod/serv/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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


  constructor(private route:ActivatedRoute,private ds:ProductService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.queryParamMap.get('id');
    this.datas = this.ds.viewprod(this.id)
    
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

}


