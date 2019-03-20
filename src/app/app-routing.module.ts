import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MycoruseComponent } from './mycoruse/mycoruse.component';
import { BrowseCoureseComponent } from './browse-courese/browse-courese.component';
import { NotRegisterStudentComponent } from './not-register-student/not-register-student.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }, 
  {
    path: 'comment',
    component: CommentContainerComponent
  },  
  {
    path: 'mycourse',
    component: MycoruseComponent
  }
  ,  
  {
    path: 'browse-courese',
    component: BrowseCoureseComponent
  },  
  {
    path: 'not-register',
    component: NotRegisterStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
