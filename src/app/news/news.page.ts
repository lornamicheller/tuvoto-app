import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public navigate : NavController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
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

}
