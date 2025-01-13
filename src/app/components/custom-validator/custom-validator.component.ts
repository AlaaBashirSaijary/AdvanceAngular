import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // إنشاء النموذج
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
     console.log('النموذج صالح:')
    if (this.form.valid) {
      console.log('النموذج صالح:', this.form.value);
    } else {
      console.log('النموذج غير صالح');
    }
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
}
