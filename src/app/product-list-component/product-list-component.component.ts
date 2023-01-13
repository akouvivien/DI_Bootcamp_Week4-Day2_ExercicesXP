import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent{
product = [
  {nom:"iphone",prix:2000},
  {nom:"sam",prix:200},
  {nom:"chine",prix:600},
]
}
