import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";
import { RegisterComponent } from '.././register/register.component';
import {Parse} from 'parse';

let parse = require("parse");


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
password:any;
username:any;
  constructor(public modalController: ModalController, public navigate: NavController, public modalCtrl: ModalController, private router: Router, public alert:AlertController) { }

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
    this.signIn();
  }

  signIn() {
    if (this.username == null || this.password == null) {
    this.empty();
    } else {
    Parse.User.logIn(this.username, this.password).then((resp) => {
    console.log(this.username);
    console.log(this.password);
    console.log('Logged in successfully', resp);

    }, err => {
    console.log('Error logging in', err);
    });
    }
    }
    async empty() {
      const alert = await this.alert.create({
      header: '¡ALERTA!',
      message: 'Todos los campos son requeridos',
      buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      console.log('Confirm Cancel');
      }
      }]
      });
      await alert.present();
    }
  


}
