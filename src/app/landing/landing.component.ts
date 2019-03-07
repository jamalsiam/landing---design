import { Component, OnInit } from '@angular/core';
import { CourseCardVM } from '../course-card/model/courseCard.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teatherList = [
    { name: '1', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '2', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '3', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '4', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '5', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '6', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '7', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '8', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '9', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '57', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '12', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '13', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '14', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '15', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '16', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '17', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '18', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '19', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
    { name: '20', description: 'معلم أول تاريخ', image: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg' },
  ]

  courseList: CourseCardVM[] = [
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 57,
      price: 0,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
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
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      deletedPrice: 124,
      price: 22,
      vedioViewed: 50,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
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
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
    {
      courseImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg',
      courseName: 'asd asd',
      price: 233,
      description: 'asfd asfd asfd safdfdasfd asdfsdf saddf',
      numberOfVedio: 17,
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
      teatherImage: 'http://wbievents.com/conference/second-brand-protection/images/speaker/matteo%20mattei.jpg'
    },
  ]


}
