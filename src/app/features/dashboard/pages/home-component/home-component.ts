import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../../../shared/components/card-component/card-component';
import { ProgressRingComponent } from '../../../../shared/components/progress-ring-component/progress-ring-component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { ImageCardComponentComponent } from '../../../../shared/components/image-card-component/image-card-component.component';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";

/* =======================
   MODELS
======================= */

export interface Mentor {
  name: string;
  role: string;
  avatar: string;
  isFollowed: boolean;
}

export interface Course {
  id: string;
  title: string;
  currentModule: string;
  progress: number;
  thumbnail: string;
  mentor: Mentor;
}

/* =======================
   COMPONENT
======================= */

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProgressRingComponent,
    SidebarComponent,
    ImageCardComponentComponent,
    NavbarComponent,
],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  courses: Course[] = [
    {
      id: 'c-001',
      title: 'Angular Fundamentals',
      currentModule: 'Components & Data Binding',
      thumbnail: 'https://cdn.flyonui.com/fy-assets/components/card/image-2.png',
      progress: 25,
      mentor: {
        name: 'Sarah Johnson',
        role: 'Frontend Engineer',
        avatar: 'https://i.pravatar.cc/150?img=32',
        isFollowed: false,
      },
    },
    {
      id: 'c-002',
      title: 'Advanced TypeScript',
      currentModule: 'Generics & Decorators',
      progress: 55,
      thumbnail: 'https://cdn.flyonui.com/fy-assets/components/card/image-6.png',
      mentor: {
        name: 'Michael Brown',
        role: 'Senior TypeScript Architect',
        avatar: 'https://i.pravatar.cc/150?img=45',
        isFollowed: false,
      },
    },
    {
      id: 'c-003',
      title: 'UI Design with Tailwind',
      currentModule: 'Responsive Layouts',
      progress: 78,
      thumbnail: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
      mentor: {
        name: 'Emily Carter',
        role: 'UI/UX Designer',
        avatar: 'https://i.pravatar.cc/150?img=21',
        isFollowed: false,
      },
    },
    {
      id: 'c-004',
      title: 'Full Stack Development',
      currentModule: 'API Integration',
      progress: 92,
      thumbnail: 'https://cdn.flyonui.com/fy-assets/components/card/image-8.png',
      mentor: {
        name: 'Daniel Wilson',
        role: 'Full Stack Engineer',
        avatar: 'https://i.pravatar.cc/150?img=58',
        isFollowed: false,
      },
    },
  ];

  trackById(index: number, course: Course): string {
    return course.id;
  }
}
