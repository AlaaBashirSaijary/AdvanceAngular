import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer-url',
  templateUrl: './dom-sanitizer-url.component.html',
  styleUrls: ['./dom-sanitizer-url.component.css']
})
export class DomSanitizerURLComponent {
  unsafeUrl: SafeUrl; // الرابط غير الآمن
  safeUrl: SafeUrl; // الرابط الآمن

  constructor(private sanitizer: DomSanitizer) {
    // تطهير الرابط غير الآمن
    const unsafeUrl = 'javascript:alert("اختراق!")'; // الرابط غير الآمن

    // تطهير الرابط غير الآمن
    this.unsafeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
    // تطهير رابط آمن
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl('https://www.example.com');
  }
}
