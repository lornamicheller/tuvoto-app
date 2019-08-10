import { Component, OnInit } from '@angular/core';
import { ChooseavatarComponent } from '.././chooseavatar/chooseavatar.component';
import { PopoverController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public popoverController: PopoverController, public navigate : NavController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ChooseavatarComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/news');
  }

  openPage2() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/vote');
  }

  openStatistics() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/statistics');
  }

  openProfile() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/profile');
  }
}
