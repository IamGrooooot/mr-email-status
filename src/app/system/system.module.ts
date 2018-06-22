import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SharedModule } from "../shared/shared.module";
import { OutboxComponent } from './outbox/outbox.component';
import { InboxComponent } from './inbox/inbox.component';
import { SystemComponent } from "./system.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations:[
    OutboxComponent,
    InboxComponent,
    NavbarComponent,
    SystemComponent
  ],
  providers: []
})
export class SystemModule{

}