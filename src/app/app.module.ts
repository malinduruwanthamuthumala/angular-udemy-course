import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthService } from "./auth.service";
import { HeadercopmonentComponent } from './headercopmonent/headercopmonent.component';
import { RecepieComponentComponent } from './recepie-component/recepie-component.component';
import { RecepieListComponentComponent } from './recepie-list-component/recepie-list-component.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';
import { RecepieComponent } from './recepie/recepie.component';
@NgModule({
  declarations: [  
    AppComponent, TestComponent, SigninComponent, SignupComponent, DashboardComponent, ForgotPasswordComponent, HeadercopmonentComponent, RecepieComponentComponent, RecepieListComponentComponent, RecepieListComponent, RecepieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. configure),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
