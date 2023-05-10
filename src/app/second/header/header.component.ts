import { Component, OnInit } from '@angular/core';
import { ProductService } from '../prod/serv/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartcount:any


  constructor(private ds: ProductService) { }

  ngOnInit(): void {
        this.cartcount = this.ds.cartArray
  }

}
