import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '.././popover/popover.component';
import {Parse} from 'Parse';
import {AlertController} from '@ionic/angular';

let parse = require("parse");
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user:any
  email:any;
  password:any;
  confirmPass:any;
  tel:any;
  town:any;
  sex:any;
  age:any;
  role:any;


  constructor(public popoverController: PopoverController, public alert: AlertController) { 

      this.role = 'C'; 
    Parse.initialize("InaFkaq5EWPZ54OmzDq8UacbX44hEiO4jMoOYNhJ", "bpqgTUqMBGzoBc5bjNJi8XIW5YNUGrTdlOpue7ix");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  ngOnInit() {



  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
    this.userRegistration();
  }

  userRegistration(){

    console.log(this.user);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPass);
    console.log(this.tel);
    console.log(this.town);
    console.log(this.sex);
    console.log(this.age);

    const user = new Parse.User();

    if (this.password != this.confirmPass) {
       this.notEqual();
    }
    else if (this.user == null || this.email == null || this.password == null || this.confirmPass == null || this.tel == null || this.town == null || this.sex == null || this.age == null) {
      this.empty();
    }
    else {
      user.set('name', this.user);
      user.set('phone', this.tel);
      user.set('email', this.email);
      user.set('password', this.password);
      user.set('username', this.email);
      user.set('town', this.town);
      user.set('sex', this.sex);
      user.set('age', this.age);
      user.set('role', this.role);

      user.signUp().then((user) => {
        console.log('user logged in')
        
      }).catch((error) => {
        console.log(error);
      });
    }
  } 

  async notEqual() {
    const alert = await this.alert.create({
      header: '¡ALERTA!',
      message: 'Las contraseñas no coinciden',
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
   // HAY QUE HACER VALIDACIÓN, SI USUARIO LLENA TODOS LOS CAMPOS OPCIONALES NO SALGA EL POPOVER COMPONENT, SINO LOS LLENA EN CLICK SALE EL POPOVER.


