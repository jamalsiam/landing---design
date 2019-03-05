import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TeatherListVM } from './model/teatherList.model';
import * as animate from './teather-list.animation';
import { CardViewerStates } from './enums/animation.enum';


@Component({
  selector: 'app-teather-list',
  templateUrl: './teather-list.component.html',
  styleUrls: ['./teather-list.component.css'],
  animations: [animate.Animations]
})
export class TeatherListComponent implements OnInit, AfterViewInit {

  @Input('data') data: TeatherListVM[];
  @ViewChild('card') cardRef: ElementRef;
  @ViewChild('cardContainer') cardContainerRef: ElementRef;
  shiftValue: number;
  currentState: string;
  listLength: number;
  numberOfCourseWillView: number;
  viewPreviousButton: boolean;
  viewNextButton: boolean;
  itemOuterWidth = 0;
  constructor() {
    this.shiftValue = 0;
    this.currentState = '';
    this.numberOfCourseWillView = 3;
    this.viewPreviousButton = false;


  }

  changeState() {
    this.currentState === CardViewerStates.stateOne ?
      this.currentState = CardViewerStates.stateTwo : this.currentState = CardViewerStates.stateOne;
  }

  nextPage() {
    this.checkCardContainerWidth()
    const nextPage = this.shiftValue - this.itemOuterWidth * this.numberOfCourseWillView;
    const displayedCourseCounter = Math.abs(nextPage) / this.itemOuterWidth;

    if (this.listLength - displayedCourseCounter < this.numberOfCourseWillView) {
      this.viewNextButton = false;
      this.shiftValue -= this.itemOuterWidth * (this.listLength - displayedCourseCounter);
    } else {
      this.shiftValue -= this.itemOuterWidth * this.numberOfCourseWillView;
    }
    this.viewPreviousButton = true;
    this.changeState();
  }

  previousPage() {
    this.checkCardContainerWidth()
    if (this.shiftValue / this.itemOuterWidth < -this.numberOfCourseWillView) {

      this.shiftValue = this.shiftValue + this.itemOuterWidth * this.numberOfCourseWillView;

    } else {

      this.viewPreviousButton = false;
      this.shiftValue = 0;

    }
    this.viewNextButton = true;
    this.changeState()
  }
  checkCardContainerWidth() {
    if (this.cardContainerRef ) {
      if (this.cardContainerRef.nativeElement.offsetWidth<850) {
        this.numberOfCourseWillView=2;
      } else{
        this.numberOfCourseWillView=3;
      }
     console.log();
     
       
    }
  }
  ngOnInit() {
    this.listLength = this.data.length;
    if (this.listLength >= this.numberOfCourseWillView) {
      this.viewNextButton = true;
    }
  }
  ngAfterViewInit(): void {
    if (this.cardRef) {
      this.itemOuterWidth = this.cardRef.nativeElement.offsetWidth;
    }
  }
}
