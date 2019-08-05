import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController, NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {

  constructor(public navigate : NavController, public popoverController: PopoverController, public modalController: ModalController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {}

  openPage() {
    let options: NativeTransitionOptions = {
      // duration: 100, 
      // iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/statistics');
  }

  async dismissClick() {
    await this.popoverController.dismiss();
    this.openPage();
  }

  async stayOnPage() {
    await this.popoverController.dismiss();
  }

}
