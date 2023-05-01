import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks';
  userDetails: any;

  onSubmitForm(value:any) {
    if (value) {
      this.userDetails = value;
      
    }
  }
}
