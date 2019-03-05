import { Component, OnInit, Input } from '@angular/core';
import { CourseCardVM } from './model/courseCard.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input('data') data: CourseCardVM;
  constructor() { }

  ngOnInit() {
  }

}
