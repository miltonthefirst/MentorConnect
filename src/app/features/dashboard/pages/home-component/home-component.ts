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

  courses: Course[] = [ ];

  mentorName: string = 'John Doe';
  mentorRole: string = 'Angular Mentor';
  mentorAvatar: string = 'https://cdn.flyonui.com/fy-assets/components/card/image-6.png'
  courseProgress: number = 80;
  courseTitle: string = 'Advanced Angular';
  courseModule:string = 'Module 1: Getting Started';
  courseModuleImage: string = 'https://cdn.flyonui.com/fy-assets/components/card/image-6.png'

  ngOnInit() {
    this.fetchCourses();
  } 
  
  fetchCourses() {    // Simulate fetching data from a server
    setTimeout(() => {
      this.courses = [
        { id: '1', title: 'Introduction to Angular', progress: 75, mentor: 'John Doe', lessonsTotal: 10, lessonsCompleted: 7, color: 'bg-blue-500', image: 'https://via.placeholder.com/150' },
        { id: '2', title: 'Advanced Angular', progress: 50, mentor: 'Jane Smith', lessonsTotal: 15, lessonsCompleted: 8, color: 'bg-green-500', image: 'https://via.placeholder.com/150' },
        { id: '3', title: 'Angular Best Practices', progress: 90, mentor: 'Alice Johnson', lessonsTotal: 12, lessonsCompleted: 11, color: 'bg-red-500', image: 'https://via.placeholder.com/150' },
      ];
    }, 2000);
  }

}
