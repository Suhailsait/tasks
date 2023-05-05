import { Component, OnInit } from '@angular/core';
import * as  Data  from '../datas';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  datas:any;


  constructor() { }

  ngOnInit(): void {
    this.datas = Data;

  }

}
