import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    RouterModule.forChild([
      { path: 'about', component: AboutComponent } // تعريف المسار الافتراضي
    ])
  ]
})
export class AboutModule { }
