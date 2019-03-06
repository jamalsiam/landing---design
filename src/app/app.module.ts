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

@NgModule({
  declarations: [
    AppComponent,
    TeatherListComponent,
    CourseCardComponent,
    HeaderComponent,
    CourseInAllMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
