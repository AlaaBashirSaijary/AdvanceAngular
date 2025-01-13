import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByExpComponent } from './components/track-by-exp/track-by-exp.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AllNgComponent } from './components/all-ng/all-ng.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { DomSanitizerHTMLComponent } from './components/dom-sanitizer-html/dom-sanitizer-html.component';
import { DomSanitizerURLComponent } from './components/dom-sanitizer-url/dom-sanitizer-url.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';

const routes: Routes = [
  { path: 'track-by', component: TrackByExpComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'all', component: AllNgComponent },
  { path: 'async', component: AsyncPipeComponent },
  { path: 'Sanitize', component: DomSanitizerHTMLComponent },
  { path: 'URL', component: DomSanitizerURLComponent },
  {path:'customValidator',component:CustomValidatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
