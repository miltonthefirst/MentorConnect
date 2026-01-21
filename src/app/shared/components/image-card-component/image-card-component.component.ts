import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarComponentComponent } from '../progress-bar-component/progress-bar-component.component';

@Component({
  selector: 'app-image-card-component',
  templateUrl: './image-card-component.component.html',
  styleUrls: ['./image-card-component.component.css'],
  imports: [ProgressBarComponentComponent,]
})
export class ImageCardComponentComponent implements OnInit {
  @Input() mentor: string = '';
  @Input() mentorRole: string = '';
  @Input() mentorImage: string = '';
  @Input() courseProgress: number = 0;
  @Input() courseTitle: string = '';
  @Input() courseModule: string = '';
  @Input() courseModuleImage: string = '';

  constructor() { }

  ngOnInit() {
  }

}
