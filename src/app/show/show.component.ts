import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  @Input() userDetail:Array<any> = [];
  constructor() {
    console.log("constructor");
    
   }

  ngOnInit(): void { 
    console.log("ngonit");
    
      this.userDetail=[];
      
  }

}
