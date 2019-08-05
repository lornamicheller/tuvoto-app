import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '.././popover/popover.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

   // HAY QUE HACER VALIDACIÓN, SI USUARIO LLENA TODOS LOS CAMPOS OPCIONALES NO SALGA EL POPOVER COMPONENT, SINO LOS LLENA EN CLICK SALE EL POPOVER.

}
