import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  items:any = [];
  
  constructor(public navCtrl: NavController) {

  }

}