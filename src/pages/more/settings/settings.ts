import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountSettingsPage } from './account-settings/account-settings';
import { SkillsSettingsPage } from './skills-settings/skills-settings';
import { NotificationSettingsPage } from './notification-settings/notification-settings';
import { PasswordResetPage } from './password-reset/password-reset';
import { MobileVerificationPage } from './mobile-verification/mobile-verification';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  title: string;
  menus: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
    
    this.initMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  initMenu() {
    this.menus = [{
        text: 'Account Settings',
        type: 'link',
        url: AccountSettingsPage
      },
      {
        text: 'Skills',
        type: 'link',
        url: SkillsSettingsPage
      },
      {
        text: 'Notification settings',
        type: 'link',
        url: NotificationSettingsPage
      },
      {
        text: 'Password Reset',
        type: 'link',
        url: PasswordResetPage
      },
      {
        text: 'Mobile Verification',
        type: 'link',
        url: MobileVerificationPage
      }
    ];
  }

  clickMenu(menu) {
    this.navCtrl.push(menu.url, {title: menu.text});
  }

}
