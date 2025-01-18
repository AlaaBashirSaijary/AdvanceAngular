import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert-notification',
  templateUrl: './sweetalert-notification.component.html',
  styleUrl: './sweetalert-notification.component.css'
})
export class SweetalertNotificationComponent {
  showSuccessNotification() {
    Swal.fire({
      title: 'تم التسجيل بنجاح!',
      text: 'أهلاً بك في موقعنا، يمكنك الآن البدء في استخدام التطبيق.',
      icon: 'success',
      confirmButtonText: 'موافق',
      showConfirmButton: true,
      timer: 3000, // يغلق التنبيه بعد 3 ثواني
      position: 'top-end', // تحديد مكان التنبيه (يمكنك اختيار bottom-left، top-right، ...)
      toast: true, // جعل التنبيه يظهر كـ "Toast"
      timerProgressBar: true // عرض شريط التقدم عند العد التنازلي للوقت
    });
  }

  showErrorNotification() {
    Swal.fire({
      title: 'خطأ!',
      text: 'حدث خطأ في معالجة البيانات.',
      icon: 'error',
      confirmButtonText: 'حاول مرة أخرى'
    });
  }

  showInfoNotification() {
    Swal.fire({
      title: 'معلومة',
      text: 'هذه هي المعلومة التي تريد عرضها.',
      icon: 'info',
      confirmButtonText: 'موافق'
    });
  }

  showWarningNotification() {
    Swal.fire({
      title: 'تحذير!',
      text: 'تأكد من صحة البيانات قبل إرسالها.',
      icon: 'warning',
      confirmButtonText: 'حسنًا'
    });
  }
}
