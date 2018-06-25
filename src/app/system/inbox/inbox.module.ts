import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { InboxComponent } from "./inbox.component";
import { InboxInactiveComponent } from './inbox-inactive/inbox-inactive.component';
import { InboxActiveComponent } from './inbox-active/inbox-active.component';
import { InboxRoutingModule } from "./inbox-routing.module";
import { InboxNavbarComponent } from "./shared/component/inbox-navbar.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InboxRoutingModule
  ],
  declarations:[
    InboxComponent,
    InboxInactiveComponent,
    InboxActiveComponent,
    InboxNavbarComponent
  ],
  providers: []
})
export class InboxModule{

}