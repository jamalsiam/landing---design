import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MycoruseComponent } from './mycoruse/mycoruse.component';
import { BrowseCoureseComponent } from './browse-courese/browse-courese.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },  
  {
    path: 'mycourse',
    component: MycoruseComponent
  }
  ,  
  {
    path: 'browse-courese',
    component: BrowseCoureseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
