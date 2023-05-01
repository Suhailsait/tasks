import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit,OnChanges {
  @Input() userDetail:any;

  constructor() { }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    console.log(this.userDetail);

  }

}
