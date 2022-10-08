import { Component, OnInit } from '@angular/core';
import { products } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = products;
  // define all function handle reaction from client
  share() {
    window.alert("The product hs been shared!")
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale")
  }
}
