import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: String = 'Serving With Heart';
  heroImage: String = 'url("/assets/img/bg-1.jpg")';
  overviewImage: String = 'url("/assets/img/bg-2.jpg")';
}
