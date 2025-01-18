import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByExpComponent } from './components/track-by-exp/track-by-exp.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AllNgComponent } from './components/all-ng/all-ng.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { DomSanitizerHTMLComponent } from './components/dom-sanitizer-html/dom-sanitizer-html.component';
import { DomSanitizerURLComponent } from './components/dom-sanitizer-url/dom-sanitizer-url.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { ChangeDetectionDemoComponent } from './components/change-detection-demo/change-detection-demo.component';
import { ChartComponent } from './components/chart/chart.component';
import { AuthComponent } from './components/auth/auth.component';
import { SweetalertNotificationComponent } from './components/sweetalert-notification/sweetalert-notification.component';
import { NgforcomponentComponent } from './components/ngforcomponent/ngforcomponent.component';
import { CarouselcomponentComponent } from './components/carouselcomponent/carouselcomponent.component';
import { MainEmitterComponent } from './components/main-emitter/main-emitter.component';
import { ChilldEmitterComponent } from './components/chilld-emitter/chilld-emitter.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'track-by', component: TrackByExpComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'all', component: AllNgComponent },
  { path: 'async', component: AsyncPipeComponent },
  { path: 'Sanitize', component: DomSanitizerHTMLComponent },
  { path: 'URL', component: DomSanitizerURLComponent },
  {path:'customValidator',component:CustomValidatorComponent},
  {path:'changeDetection',component:ChangeDetectionDemoComponent},
  {path:'chart',component:ChartComponent},
  {path:'auth',component:AuthComponent},
  {path:'sweet',component:SweetalertNotificationComponent},
  {path:'Ngfor',component:NgforcomponentComponent},
  {path:'Carousel',component:CarouselcomponentComponent},
  {path:'MainEmitter',component:MainEmitterComponent},
  {path:'header',component:HeaderComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
