import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { OutboxComponent } from "./outbox.component";
import { OutboxActiveComponent } from './outbox-active/outbox-active.component';
import { OutboxInactiveComponent } from './outbox-inactive/outbox-inactive.component';
import { OutboxRoutingModule } from "./outbox-routing.module";
import { OutboxNavbarComponent } from "./shared/component/outbox-navbar.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OutboxRoutingModule
  ],
  declarations:[
    OutboxComponent,
    OutboxActiveComponent,
    OutboxInactiveComponent,
    OutboxNavbarComponent
  ],
  providers: []
})
export class OutboxModule{

}