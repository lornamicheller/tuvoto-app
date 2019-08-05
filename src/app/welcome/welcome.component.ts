import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";
import { RegisterComponent } from '.././register/register.component';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(public modalController: ModalController, public navigate: NavController, public modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
    this.openWelcome2();
  }

  async openWelcome2() {

    const modal = await this.modalCtrl.create({
      component: RegisterComponent,
      cssClass: 'transition-modal',
      componentProps: {
        value: 123
      }
    });
    return await modal.present();
  }


}
