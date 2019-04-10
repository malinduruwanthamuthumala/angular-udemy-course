import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {
ingrediants:Ingrediants[]=[
  new Ingrediants('apples',1000),
  new Ingrediants('pineapple',50),
]
  constructor() { }

  ngOnInit() {
  }

}
