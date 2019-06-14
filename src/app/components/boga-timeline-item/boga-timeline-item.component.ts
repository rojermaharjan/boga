import { Component, OnInit, Input } from '@angular/core';

import { TimelineItem } from 'src/app/interfaces/timeline-item';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'boga-timeline-item',
  templateUrl: './boga-timeline-item.component.html',
  styleUrls: ['./boga-timeline-item.component.scss']
})
export class BogaTimelineItemComponent implements OnInit {
  @Input() item: TimelineItem;
  @Input() rtl: Boolean;

  constructor() { }

  ngOnInit() {
  }
}
