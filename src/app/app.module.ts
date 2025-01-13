import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackByExpComponent } from './components/track-by-exp/track-by-exp.component';
import { ToastrExpComponent } from './components/toastr-exp/toastr-exp.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ButtonComponent } from './components/button/button.component';
import { TemplateComponent } from './components/template/template.component';
import { ContainerComponent } from './components/container/container.component';
import { AllNgComponent } from './components/all-ng/all-ng.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { DomSanitizerHTMLComponent } from './components/dom-sanitizer-html/dom-sanitizer-html.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizerURLComponent } from './components/dom-sanitizer-url/dom-sanitizer-url.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackByExpComponent,
    ToastrExpComponent,
    SpinnerComponent,
    ThemeComponent,
    ButtonComponent,
    TemplateComponent,
    ContainerComponent,
    AllNgComponent,
    AsyncPipeComponent,
    DomSanitizerHTMLComponent,
    DomSanitizerURLComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
