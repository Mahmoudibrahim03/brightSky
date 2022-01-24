import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
