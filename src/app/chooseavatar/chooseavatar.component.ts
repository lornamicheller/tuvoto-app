import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-chooseavatar',
  templateUrl: './chooseavatar.component.html',
  styleUrls: ['./chooseavatar.component.scss'],
})
export class ChooseavatarComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}


  async dismissClick() {
    await this.popoverController.dismiss();
  }
}
