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
import { ChangeDetectionDemoComponent } from './components/change-detection-demo/change-detection-demo.component';
import { ChartComponent } from './components/chart/chart.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';
import { AuthComponent } from './components/auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from '../environments/environment';
import { SweetalertNotificationComponent } from './components/sweetalert-notification/sweetalert-notification.component';
import { NgforcomponentComponent } from './components/ngforcomponent/ngforcomponent.component';
import { CarouselcomponentComponent } from './components/carouselcomponent/carouselcomponent.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChilldEmitterComponent } from './components/chilld-emitter/chilld-emitter.component';
import { MainEmitterComponent } from './components/main-emitter/main-emitter.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomPipe } from './custom.pipe';
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
    CustomValidatorComponent,
    ChangeDetectionDemoComponent,
    ChartComponent,
    AuthComponent,
    SweetalertNotificationComponent,
    NgforcomponentComponent,
    CarouselcomponentComponent,
    ChilldEmitterComponent,
    MainEmitterComponent,
    HeaderComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // For Authentication
    AngularFirestoreModule, // For Firestore Database
    NgbCarouselModule ,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"angular-demo-71db7","appId":"1:17656260497:web:7f06fd62e13d49183a1c30","storageBucket":"angular-demo-71db7.firebasestorage.app","apiKey":"AIzaSyB4fQMRlGYC8aP-b9fErodHDQC72dqejNs","authDomain":"angular-demo-71db7.firebaseapp.com","messagingSenderId":"17656260497"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideVertexAI(() => getVertexAI())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
