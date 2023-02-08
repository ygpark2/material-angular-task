import {Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  hideSxMenuItems: boolean;
  title: string;

  constructor() {
    this.hideSxMenuItems = true;
    this.title = 'Task Web App';
  }

  ngOnInit() {

  }


}
