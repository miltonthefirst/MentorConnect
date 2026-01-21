import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-ring-component',
  imports: [],
  templateUrl: './progress-ring-component.html',
  styleUrl: './progress-ring-component.css',
})
export class ProgressRingComponent {
  @Input() label: string = '';
  @Input() percentage: number = 0;
  
  radius = 34;
  circumference = 2 * Math.PI * this.radius;

  get dashOffset() {
    return this.circumference - (this.percentage / 100) * this.circumference;
  }
}
