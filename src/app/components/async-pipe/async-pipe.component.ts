import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {
  data$: Observable<string> = of('تم تحميل البيانات بنجاح!');

}
