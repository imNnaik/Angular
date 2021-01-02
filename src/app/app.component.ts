import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onClicking: number;
  gender = [
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Prefer not to say' }
  ];

  
  onClick(i) {
    this.onClicking = i;
  }
}
