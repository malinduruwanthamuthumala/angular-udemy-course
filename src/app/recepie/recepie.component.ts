import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {
recepies:Recepie[]=[
  new Recepie('test recepie','sdsd','sdsdsd'),
];
  constructor() { }

  ngOnInit() {
  }

}
