import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByExpComponent } from './components/track-by-exp/track-by-exp.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  { path: 'track-by', component: TrackByExpComponent },
  { path: 'spinner', component: SpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
