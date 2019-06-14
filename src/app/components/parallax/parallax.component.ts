import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @Input() heroImage: String;
  @Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
