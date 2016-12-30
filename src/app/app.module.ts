import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PostTaskPage } from '../pages/post-task/post-task';
import { MyTaskPage } from '../pages/my-task/my-task';
import { BrowsePage } from '../pages/browse/browse';
import { MessagesPage } from '../pages/messages/messages';
import { MorePage } from '../pages/more/more';
import { DashboardPage } from '../pages/more/dashboard/dashboard';
import { ProfilePage } from '../pages/more/profile/profile';
import { PaymentHistoryPage } from '../pages/more/payment-history/payment-history';
import { PaymentMethodsPage } from '../pages/more/payment-methods/payment-methods';
import { PendingReviewsPage } from '../pages/more/pending-reviews/pending-reviews';
import { NotificationsPage } from '../pages/more/notifications/notifications';
import { TaskAlertsPage } from '../pages/more/task-alerts/task-alerts';
import { SettingsPage } from '../pages/more/settings/settings';
import { HelpPage } from '../pages/more/help/help';

import { AccountSettingsPage } from '../pages/more/settings/account-settings/account-settings';
import { SkillsSettingsPage } from '../pages/more/settings/skills-settings/skills-settings';
import { NotificationSettingsPage } from '../pages/more/settings/notification-settings/notification-settings';
import { PasswordResetPage } from '../pages/more/settings/password-reset/password-reset';
import { MobileVerificationPage } from '../pages/more/settings/mobile-verification/mobile-verification';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    PostTaskPage,
    MyTaskPage,
    BrowsePage,
    MessagesPage,
    MorePage,
    DashboardPage,
    ProfilePage,
    PaymentHistoryPage,
    PaymentMethodsPage,
    PendingReviewsPage,
    NotificationsPage,
    TaskAlertsPage,
    HelpPage,

    SettingsPage,
    AccountSettingsPage,
    SkillsSettingsPage,
    NotificationSettingsPage,
    PasswordResetPage,
    MobileVerificationPage,    

    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostTaskPage,
    MyTaskPage,
    BrowsePage,
    MessagesPage,
    MorePage,
    DashboardPage,
    ProfilePage,
    PaymentHistoryPage,
    PaymentMethodsPage,
    PendingReviewsPage,
    NotificationsPage,
    TaskAlertsPage,
    HelpPage,
    
    SettingsPage,
    AccountSettingsPage,
    SkillsSettingsPage,
    NotificationSettingsPage,
    PasswordResetPage,
    MobileVerificationPage,    
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}
