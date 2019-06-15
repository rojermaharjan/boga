import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  title: String = 'Album';
  heroImage: String = 'url("/assets/img/bg-6.jpg")';
  introImage: String = 'url("/assets/img/album-1-1.jpg")';
  galleryItems: any[] = [
    {
      title: 'Lorem',
      image: '/assets/img/bg-1.jpg'
    },
    {
      image: '/assets/img/bg-2.jpg'
    },
    {
      image: '/assets/img/bg-3.jpg'
    },
    {
      image: '/assets/img/bg-sm-4.jpg'
    },
    {
      image: '/assets/img/bg-sm-5.jpg'
    },
    {
      image: '/assets/img/bg-6.jpg'
    },
    {
      image: '/assets/img/timeline-1.jpg'
    },
    {
      image: '/assets/img/timeline-2.jpg'
    },
    {
      image: '/assets/img/album-1-1.jpg'
    }
  ];
  currentItem = this.galleryItems[8];
  isPopUpActive = false;
  constructor() { }

  ngOnInit() {
  }
}
