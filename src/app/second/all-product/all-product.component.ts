import { Component, OnInit } from '@angular/core';
import { Data }  from '../datas';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  datas:any;

  constructor() { }

  ngOnInit(): void {
    this.datas = Data;
  }

}
