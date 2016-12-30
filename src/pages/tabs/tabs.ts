import { Component } from '@angular/core';

import { PostTaskPage } from '../post-task/post-task';
import { MyTaskPage } from '../my-task/my-task';
import { BrowsePage } from '../browse/browse';
import { MessagesPage } from '../messages/messages';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PostTaskPage;
  tab2Root: any = MyTaskPage;
  tab3Root: any = BrowsePage;
  tab4Root: any = MessagesPage;
  tab5Root: any = MorePage;
 
  constructor() {

  } 
}
