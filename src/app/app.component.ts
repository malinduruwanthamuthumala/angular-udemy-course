import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
name='';
usercreation="No user is registered";

allowtosubmit=false;
constructor(){
  setTimeout(()=>{
    this.allowtosubmit=true;
  },2000);
}

ngOnInit(){

}

onCreateServer(){
  this.usercreation="user is created";
}
}
