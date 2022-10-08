import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}