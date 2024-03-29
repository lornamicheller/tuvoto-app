import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { Popover3Component } from '.././popover3/popover3.component';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { PopoverController } from '@ionic/angular';




@Component({
  selector: 'app-second-candidate',
  templateUrl: './second-candidate.component.html',
  styleUrls: ['./second-candidate.component.scss'],
})
export class SecondCandidateComponent implements OnInit {

  constructor(public navigate: NavController, public modalController: ModalController, private nativePageTransitions: NativePageTransitions, public popoverController: PopoverController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover3Component,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
