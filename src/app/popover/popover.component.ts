import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController, NavController, PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public navigate : NavController, public popoverController: PopoverController, public modalController: ModalController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {}

  openPage() {
    let options: NativeTransitionOptions = {
      // duration: 100, 
      // iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/news');
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
