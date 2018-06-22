import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SystemComponent } from "./system.component";
import { InboxComponent } from "./inbox/inbox.component";
import { OutboxComponent } from "./outbox/outbox.component";

const routes: Routes = [
  {
    path: 'system',
    component: SystemComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'outbox',
        component: OutboxComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule{

}