import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
recepie:Recepie[]=[
  new Recepie('new recepie','new description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRumNBzv0vfe8OSRpsV_GpiVI0lG0NQXh79V-HnISszRJu9yM'),
  new Recepie('new recepie','new description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRumNBzv0vfe8OSRpsV_GpiVI0lG0NQXh79V-HnISszRJu9yM'),
]
  constructor() { }

  ngOnInit() {
  }

}
