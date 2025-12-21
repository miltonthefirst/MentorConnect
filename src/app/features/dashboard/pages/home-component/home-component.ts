import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card-component/card-component';
import { ProgressRingComponent } from '../../../../shared/components/progress-ring-component/progress-ring-component';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";
import { ImageCardComponentComponent } from "../../../../shared/components/image-card-component/image-card-component.component";


export interface Course {
  id: string;
  title: string;
  progress: number;
  mentor?: string;
  lessonsTotal: number;
  lessonsCompleted: number;
  color: string; // e.g., 'bg-blue-500'
  image?: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  duration: string;
  lessonCount: number;
  color: string;
}

export interface Mentor {
  name: string;
  role: string;
  avatar: string;
  isFollowed: boolean;
}

@Component({
  selector: 'app-home-component',
  imports: [
    CardComponent,
    ProgressRingComponent,
    SidebarComponent,
    ImageCardComponentComponent,
],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
