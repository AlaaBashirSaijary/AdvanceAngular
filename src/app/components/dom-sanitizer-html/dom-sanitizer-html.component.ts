import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer-html',
  templateUrl: './dom-sanitizer-html.component.html',
  styleUrls: ['./dom-sanitizer-html.component.css']
})
export class DomSanitizerHTMLComponent {
  unsafeInput = ''; // النص غير الآمن
  userInput = ''; // النص الآمن
  safeContent!: SafeHtml; // النص الآمن بعد التطهير
  
  constructor(private sanitizer: DomSanitizer) {}

  // عند إدخال نص في الحقل الآمن، سيتم تطهيره
  updateSafeContent(): void {
    this.safeContent = this.sanitizer.sanitize(
      1, // 1 يشير إلى "HTML"
      this.sanitizer.bypassSecurityTrustHtml(this.userInput)
    )!;
  }
}
