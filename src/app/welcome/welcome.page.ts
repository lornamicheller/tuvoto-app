import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";
import { RegisterComponent } from '.././register/register.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navigate: NavController, public modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
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
