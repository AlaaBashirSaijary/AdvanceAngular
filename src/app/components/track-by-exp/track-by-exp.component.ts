import { Component, ViewChild } from '@angular/core';
import { ToastrExpComponent } from '../toastr-exp/toastr-exp.component';

@Component({
  selector: 'app-track-by-exp',
  templateUrl: './track-by-exp.component.html',
  styleUrl: './track-by-exp.component.css'
})
export class TrackByExpComponent {
  @ViewChild(ToastrExpComponent) toastr!: ToastrExpComponent;
  items = [
    { id: 1, name: 'Computer' },
    { id: 2, name: 'phone' },
    { id: 3, name: 'Mobile' },
  ];

  trackById(index: number, item: any): number {
    return item.id; // التتبع باستخدام المعرف (ID)
  }

  updateItems() {
    // تحديث القائمة بدون تغيير المعرفات
    this.items = [
      { id: 1, name: 'Updated Item 1' },
      { id: 2, name: 'Updated Item 2' },
      { id: 3, name: 'Updated Item 3' },
    ];
  }
  showSuccess() {
    this.toastr.showToast('Success', 'Operation completed successfully!', 'success');
  }

  showError() {
    this.toastr.showToast('Error', 'Something went wrong!', 'error');
  }

  showInfo() {
    this.toastr.showToast('Info', 'This is some information.', 'info');
  }

  showWarning() {
    this.toastr.showToast('Warning', 'Be cautious with this action.', 'warning');
  }
}
