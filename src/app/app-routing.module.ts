import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { PageComponent } from "./system/page/page.component";
import { SystemComponent } from "./system/system.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/system/inbox-active',
    pathMatch:'full'
  }
  // {
  //   path:'system/inbox',
  //   redirectTo:'/system/inbox/active',
  //   pathMatch:'full'
  // },
  // {
  //   path:'system/outbox',
  //   redirectTo:'/system/outbox/active',
  //   pathMatch:'full'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}