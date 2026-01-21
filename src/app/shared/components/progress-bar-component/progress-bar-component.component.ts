import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-component',
  templateUrl: './progress-bar-component.component.html',
  styleUrls: ['./progress-bar-component.component.css']
})
export class ProgressBarComponentComponent  {
  @Input() progress: number = 0;

  get barColor(): string {
    if (this.progress < 50) return 'bg-amber-500';
    if (this.progress < 80) return 'bg-blue-600';
    return 'bg-green-600';
  }

  get textColor(): string {
    if (this.progress < 50) return 'text-amber-600';
    if (this.progress < 80) return 'text-blue-600';
    return 'text-green-600';
  }
}
