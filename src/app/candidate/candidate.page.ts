import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CandidateInfoComponent } from '.././candidate-info/candidate-info.component';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { SecondCandidateComponent } from '.././second-candidate/second-candidate.component';
import { Popover2Component } from '.././popover2/popover2.component';





@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  constructor(public navigate: NavController, public modalCtrl: ModalController, private nativePageTransitions: NativePageTransitions, public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async openWelcome() {

    const modal = await this.modalCtrl.create({
      component: CandidateInfoComponent,
      cssClass: 'transition-modal',
      componentProps: {
        value: 123
      }
    });
    return await modal.present();
  }

  async openWelcome2() {

    const modal = await this.modalCtrl.create({
      component: SecondCandidateComponent,
      cssClass: 'transition-modal',
      componentProps: {
        value: 123
      }
    });
    return await modal.present();
  }


  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/news');
  }

  openPage2() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/vote');
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover2Component,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  openStatistics() {
    let options: NativeTransitionOptions = {
      duration: 100, 
      iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot('/statistics');
  }

}
