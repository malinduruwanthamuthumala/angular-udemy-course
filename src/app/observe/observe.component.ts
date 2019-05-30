import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const Mynumbers=interval(1000);
    Mynumbers.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );
  }

}
