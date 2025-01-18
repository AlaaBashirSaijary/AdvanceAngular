import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforcomponent',
  templateUrl: './ngforcomponent.component.html',
  styleUrl: './ngforcomponent.component.css'
})
export class NgforcomponentComponent {
  items = [
    { id: 1, name: 'منتج 1', price: 100 },
    { id: 2, name: 'منتج 2', price: 200 },
    { id: 3, name: 'منتج 3', price: 300 }
  ];
}
