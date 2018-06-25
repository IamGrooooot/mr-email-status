import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OutboxComponent } from "./outbox.component";
import { OutboxActiveComponent } from "./outbox-active/outbox-active.component";
import { OutboxInactiveComponent } from "./outbox-inactive/outbox-inactive.component";

const routes: Routes = [
  {
    path: 'system/outbox',
    component: OutboxComponent,
    children: [
      {
        path: 'active',
        component: OutboxActiveComponent
      },
      {
        path: 'inactive',
        component: OutboxInactiveComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OutboxRoutingModule{

}