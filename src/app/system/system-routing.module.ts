import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SystemComponent } from "./system.component";
import { InboxComponent } from "./inbox/inbox.component";
import { OutboxComponent } from "./outbox/outbox.component";
import { InboxActiveComponent } from "./inbox/inbox-active/inbox-active.component";
import { InboxInactiveComponent } from "./inbox/inbox-inactive/inbox-inactive.component";
import { OutboxActiveComponent } from "./outbox/outbox-active/outbox-active.component";
import { OutboxInactiveComponent } from "./outbox/outbox-inactive/outbox-inactive.component";
import { PageComponent } from "./page/page.component";

// const routes: Routes = [
//   {
//     path: 'system',
//     component: SystemComponent,
//     children: [
//       {
//         path: 'inbox',
//         component: InboxComponent,
//         children:[
//           {
//             path: 'active',
//             component: InboxActiveComponent
//           },
//           {
//             path: 'inactive',
//             component: InboxInactiveComponent
//           }
//         ]
//       },
//       {
//         path: 'outbox',
//         component: OutboxComponent,
//         children:[
//           {
//             path: 'active',
//             component: OutboxActiveComponent
//           },
//           {
//             path: 'inactive',
//             component: OutboxInactiveComponent
//           }
//         ]
//       }
//     ]
//   }
// ]

const routes: Routes = [
  {
    path:'system',
    component: SystemComponent,
  },
  {
    path: 'system/:id',
    component: PageComponent,
    pathMatch:'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule{

}