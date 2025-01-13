import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  items: string[] = ['عنصر 1', 'عنصر 2', 'عنصر 3'];
}
