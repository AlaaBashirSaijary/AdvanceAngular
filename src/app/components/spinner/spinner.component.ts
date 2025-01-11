import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  isLoading = false; // حالة الإظهار أو الإخفاء للـ spinner

  toggleSpinner() {
    this.isLoading = !this.isLoading; // التبديل بين حالة تحميل و غير تحميل
  }
}
