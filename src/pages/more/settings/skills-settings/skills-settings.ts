import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SkillsSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skills-settings',
  templateUrl: 'skills-settings.html'
})
export class SkillsSettingsPage {
  title: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsSettingsPage');
  }

}
