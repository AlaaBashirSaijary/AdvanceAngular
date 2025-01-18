import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-chilld-emitter',
  templateUrl: './chilld-emitter.component.html',
  styleUrl: './chilld-emitter.component.css'
})
export class ChilldEmitterComponent {
  @Input() product: { name: string; price: number } | undefined;
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();

  addToCart() {
    if (this.product) {
      this.productAdded.emit(this.product);
    }
  }
}
