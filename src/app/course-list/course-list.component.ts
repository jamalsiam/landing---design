import { Component, OnInit, Input } from '@angular/core';
import { CourseCardVM } from '../course-card/model/courseCard.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input('list') courseList: CourseCardVM[] = [];
  constructor() { }

  ngOnInit() {
  }

}
