import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toastr-exp',
  templateUrl: './toastr-exp.component.html',
  styleUrl: './toastr-exp.component.css'
})
export class ToastrExpComponent {
  toasts: { title: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }[] = [];

  // إعداد EventEmitter لاستقبال التنبيهات من المكونات الأخرى
  @Output() toastClosed: EventEmitter<any> = new EventEmitter();

  // دالة لعرض الإشعارات
  showToast(title: string, message: string, type: 'success' | 'error' | 'info' | 'warning') {
    const toast = { title, message, type };
    this.toasts.push(toast);

    // إزالة الإشعار تلقائيًا بعد 5 ثوانٍ
    setTimeout(() => this.removeToast(toast), 5000);
  }

  // دالة لحذف الإشعار
  removeToast(toast: { title: string; message: string; type: string }) {
    this.toasts = this.toasts.filter((t) => t !== toast);
    this.toastClosed.emit(toast); // Emit الحدث عند غلق الإشعار
  }
}
