import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-component',
  templateUrl: './progress-bar-component.component.html',
  styleUrls: ['./progress-bar-component.component.css']
})
export class ProgressBarComponentComponent implements OnInit {
  @Input() progress: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
