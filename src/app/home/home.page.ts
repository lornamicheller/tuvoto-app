import { Component } from '@angular/core';
import { WelcomeComponent } from '.././welcome/welcome.component';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navigate: NavController, public modalCtrl: ModalController, private router: Router) {}

  async openWelcome() {

    const modal = await this.modalCtrl.create({
      component: WelcomeComponent,
      cssClass: 'transition-modal',
      componentProps: {
        value: 123
      }
    });
    return await modal.present();
  }
}
