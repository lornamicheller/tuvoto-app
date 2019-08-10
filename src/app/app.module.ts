import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { PopoverComponent } from './popover/popover.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { SecondCandidateComponent } from './second-candidate/second-candidate.component';
import { Popover2Component } from './popover2/popover2.component';
import { Popover3Component } from './popover3/popover3.component';
import { ChooseavatarComponent } from './chooseavatar/chooseavatar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, WelcomeComponent, RegisterComponent, PopoverComponent, CandidateInfoComponent, SecondCandidateComponent, Popover2Component, Popover3Component, ChooseavatarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, WelcomeComponent, RegisterComponent, PopoverComponent, CandidateInfoComponent, SecondCandidateComponent, Popover2Component, Popover3Component, ChooseavatarComponent]
})
export class AppModule {}
