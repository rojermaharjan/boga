import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BogaProductItemComponent } from './boga-product-item.component';

@NgModule({
  declarations: [BogaProductItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BogaProductItemComponent]
})
export class BogaProductItemModule { }
