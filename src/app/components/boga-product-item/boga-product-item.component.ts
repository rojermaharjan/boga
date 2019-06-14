import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'boga-product-item',
  templateUrl: './boga-product-item.component.html',
  styleUrls: ['./boga-product-item.component.scss']
})
export class BogaProductItemComponent implements OnInit {
  @Input() rtl = false;
  @Input() productImage: String = 'url("/assets/img/product-1.jpg")';

  constructor() { }

  ngOnInit() {
  }

}
