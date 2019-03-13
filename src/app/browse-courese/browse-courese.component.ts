import { Component, OnInit } from '@angular/core';
import { CourseCardVM } from '../course-card/model/courseCard.model';

@Component({
  selector: 'app-browse-courese',
  templateUrl: './browse-courese.component.html',
  styleUrls: ['./browse-courese.component.css']
})
export class BrowseCoureseComponent implements OnInit {
  searchBoxStatus: boolean;

  courseList: CourseCardVM[] = [
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: 0,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      teacherName: 'xxxxxx xxxxxxx',
      numberOfVedio: 17,
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      // deletedPrice: 57,
      price: 22,
      // vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      teacherName: 'xxxxxx xxxxxxx',
      numberOfVedio: 28,
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: null,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: 22,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: null,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: 22,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: null,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: 22,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
      teacherName: 'xxxxxx xxxxxxx',
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    }
  ]
  constructor() {

  }

  ngOnInit() {
    let matTabGroupID = document.getElementById('mat-tab-group').getElementsByClassName('mat-tab-labels')[0];
    matTabGroupID.setAttribute('class', `row-area ${matTabGroupID.getAttribute('class')}`)
  }
  viewSearchBox() {
    this.searchBoxStatus =!this.searchBoxStatus
  }
}
