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
import { PushNotificationService } from 'ngx-push-notifications';
import { RecepieComponent } from './recepie/recepie.component';
import { NotificationcomponentComponent } from './notificationcomponent/notificationcomponent.component';
import { RecepieDetailsComponent } from './recepie/recepie-details/recepie-details.component';
import { RecepieItemComponent } from './recepie/recepie-details/recepie-item/recepie-item.component';
import { ShopingComponent } from './shoping/shoping.component';
import { HeaderComponent } from './header/header.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { ShopingEditComponent } from './shoping/shoping-edit/shoping-edit.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [  
    AppComponent, TestComponent, SigninComponent, SignupComponent, DashboardComponent, ForgotPasswordComponent, RecepieComponent, NotificationcomponentComponent, RecepieDetailsComponent, RecepieItemComponent, ShopingComponent, HeaderComponent, RecepieListComponent, ShopingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. configure),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule 
  ],
  providers: [AuthService,PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
