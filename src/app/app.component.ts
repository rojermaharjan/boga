import { Component, OnInit } from '@angular/core';

import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boga';
  sidebar = false;

  constructor(private wowService: NgwWowService) {
  }

  ngOnInit() {
    this.wowService.init();
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
    if (this.sidebar) {
      document.body.classList.add('overflow-h');
    } else {
      document.body.classList.remove('overflow-h');
    }
  }
}
