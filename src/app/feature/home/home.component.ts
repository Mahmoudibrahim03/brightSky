import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxTypedJsComponent} from 'ngx-typed-js';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redirect: Boolean | undefined = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  completeAutoType(): void {
    this.redirect = true;
  }

}
