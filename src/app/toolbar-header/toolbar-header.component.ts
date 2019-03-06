import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.css']
})
export class ToolbarHeaderComponent implements OnInit {
  statusSearchMobileBox: boolean;
  constructor() { }


  changeSearchMobileStatus(status: boolean) {
    this.statusSearchMobileBox = status;
  }
  ngOnInit() { }
}
