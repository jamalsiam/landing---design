import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { TeatherListComponent } from './teather-list/teather-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HeaderComponent } from './header/header.component';
import { CourseInAllMaterialComponent } from './course-in-all-material/course-in-all-material.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { LandingComponent } from './landing/landing.component';
import { MycoruseComponent } from './mycoruse/mycoruse.component';
import { BrowseCoureseComponent } from './browse-courese/browse-courese.component';
import { NotRegisterStudentComponent } from './not-register-student/not-register-student.component';
import { ToolbarNotRegisterComponent } from './not-register-student/toolbar-not-register/toolbar-not-register.component';
import { RatingModule } from 'ng-starrating';
import { CardNotRegisterComponent } from './not-register-student/card-not-register/card-not-register.component';
import { CousreContentComponent } from './not-register-student/cousre-content/cousre-content.component';


@NgModule({
  declarations: [
    AppComponent,
    TeatherListComponent,
    CourseCardComponent,
    HeaderComponent,
    CourseInAllMaterialComponent,
    CourseListComponent,
    FooterComponent,
    AboutUsComponent,
    ToolbarHeaderComponent,
    LandingComponent,
    MycoruseComponent,
    BrowseCoureseComponent,
    NotRegisterStudentComponent,
    ToolbarNotRegisterComponent,
    CardNotRegisterComponent,
    CousreContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RatingModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
