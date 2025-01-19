import { Component } from '@angular/core';
import { CustomPipe } from "../../custom.pipe";
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-pipess-example',
  templateUrl: './pipess-example.component.html',
  styleUrl: './pipess-example.component.css',
  imports:[CustomPipe,CommonModule]
})
export class PipessExampleComponent {
  products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 }
  ];
}
