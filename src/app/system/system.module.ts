import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SystemComponent } from "./system.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { InboxModule } from "./inbox/inbox.module";
import { OutboxModule } from "./outbox/outbox.module";

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    InboxModule,
    OutboxModule
  ],
  declarations:[
    NavbarComponent,
    SystemComponent
  ],
  providers: []
})
export class SystemModule{

}