import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
name='';
usercreation="No user is registered";
fname="nilakura";
allowtosubmit=false;
num1=0;
num2=0;
total=0;
string1="true";

constructor(){
  setTimeout(()=>{
    this.allowtosubmit=true;
    this.string1="false";
  },2000);
}

ngOnInit(){

}

onCreateServer(){
  this.usercreation="user is created";
}
onUpdate(event: Event){
this.fname=(<HTMLInputElement>event.target).value;
}
calculate(){
 this.total=this.num1+this.num2;

}
getcolor(){
  return this.string1 === 'true' ? 'green' : 'red';
}
}
