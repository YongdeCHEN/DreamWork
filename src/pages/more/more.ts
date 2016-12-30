import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DashboardPage } from './dashboard/dashboard';
import { ProfilePage } from './profile/profile';
import { PaymentHistoryPage } from './payment-history/payment-history';
import { PaymentMethodsPage } from './payment-methods/payment-methods';
import { PendingReviewsPage } from './pending-reviews/pending-reviews';
import { NotificationsPage } from './notifications/notifications';
import { TaskAlertsPage } from './task-alerts/task-alerts';
import { SettingsPage } from './settings/settings';
import { HelpPage } from './help/help';


@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
  menus: any;
  constructor(public navCtrl: NavController) {
    this.initMenu();
  }

  initMenu() {
    this.menus = [{
        text: 'Dashboard',
        type: 'link',
        url: DashboardPage
      },
      {
        text: 'Profile',
        type: 'link',
        url: ProfilePage
      },
      {
        text: 'Payment History',
        type: 'link',
        url: PaymentHistoryPage
      },
      {
        text: 'Payment Methods',
        type: 'link',
        url: PaymentMethodsPage
      },
      {
        text: 'Pending Reviews',
        type: 'link',
        url: PendingReviewsPage
      },
      {
        text: 'Notifications',
        type: 'link',
        url: NotificationsPage
      },
      {
        text: 'Task Alerts',
        type: 'link',
        url: TaskAlertsPage
      },
      {
        text: 'Settings',
        type: 'link',
        url: SettingsPage
      },
      {
        text: 'Help',
        type: 'link',
        url: HelpPage
      },
      {
        text: 'Invite Friends',
        type: 'dialogue',
        url: ''
      },
      {
        text: 'Logout',
        type: 'dialogue',
        url: ''
      },
    ];
  }

  clickMenu(menu) {
    if (menu.type == 'link')
      this.navCtrl.push(menu.url, {title: menu.text});

  }
}