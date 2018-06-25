import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InboxComponent } from "./inbox.component";
import { InboxActiveComponent } from "./inbox-active/inbox-active.component";
import { InboxInactiveComponent } from "./inbox-inactive/inbox-inactive.component";

const routes: Routes = [
  {
    path: 'system/inbox',
    component: InboxComponent,
    children: [
      {
        path: 'active',
        component: InboxActiveComponent
      },
      {
        path: 'inactive',
        component: InboxInactiveComponent
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
export class InboxRoutingModule{

}