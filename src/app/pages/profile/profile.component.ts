import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/interfaces/timeline-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title: String = 'Profile';
  heroImage: String = 'url("/assets/img/bg-3.jpg")';
  timeline: TimelineItem[] = [
    {
      year: '2002',
      image: '/assets/img/timeline-1.jpg',
      body: [
        {
          title: 'Milestone',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, recusandae explicabo optio vel distinctio?'
        }
      ]
    },
    {
      year: '2006',
      image: '/assets/img/timeline-2.jpg',
      body: [
        {
          title: 'Milestone',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, recusandae explicabo optio vel distinctio?'
        },
        {
          title: 'Achievements',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, recusandae explicabo optio vel distinctio?'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
