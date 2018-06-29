import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SystemComponent } from "./system.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { InboxModule } from "./inbox/inbox.module";
import { OutboxModule } from "./outbox/outbox.module";
import { MomentPipe } from "./shared/pipes/moment.pipe";
import { SomeService } from "./shared/services/some.service";
import { PaginationComponent } from './shared/components/pagination/pagination.component';

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
    SystemComponent,
    MomentPipe,
    PaginationComponent
  ],
  providers: [
    SomeService
  ]
})
export class SystemModule{

}