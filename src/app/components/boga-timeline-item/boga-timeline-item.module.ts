import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BogaTimelineItemComponent } from './boga-timeline-item.component';

@NgModule({
  declarations: [BogaTimelineItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BogaTimelineItemComponent]
})
export class BogaTimelineItemModule { }
