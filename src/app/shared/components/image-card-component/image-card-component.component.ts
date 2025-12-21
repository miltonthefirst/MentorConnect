import { Component, OnInit } from '@angular/core';
import { ProgressBarComponentComponent } from '../progress-bar-component/progress-bar-component.component';

@Component({
  selector: 'app-image-card-component',
  templateUrl: './image-card-component.component.html',
  styleUrls: ['./image-card-component.component.css'],
  imports: [ProgressBarComponentComponent,]
})
export class ImageCardComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
