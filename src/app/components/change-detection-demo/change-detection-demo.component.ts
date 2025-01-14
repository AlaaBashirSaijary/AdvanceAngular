import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrl: './change-detection-demo.component.css'
})
export class ChangeDetectionDemoComponent {
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }
}
