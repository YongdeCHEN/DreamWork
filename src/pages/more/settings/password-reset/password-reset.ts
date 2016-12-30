import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PasswordReset page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html'
})
export class PasswordResetPage {
  title: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetPage');
  }

}
