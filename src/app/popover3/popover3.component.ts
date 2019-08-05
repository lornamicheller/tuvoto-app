import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController, NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover3',
  templateUrl: './popover3.component.html',
  styleUrls: ['./popover3.component.scss'],
})
export class Popover3Component implements OnInit {

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
  }

  async stayOnPage() {
    await this.popoverController.dismiss();
  }

  closeModal() {
    this.modalController.dismiss();
    this.dismissClick();
    this.openPage();
  }
}
