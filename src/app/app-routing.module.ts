import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/system/inbox/active',
    pathMatch:'full'
  },
  {
    path:'system/inbox',
    redirectTo:'/system/inbox/active',
    pathMatch:'full'
  },
  {
    path:'system/outbox',
    redirectTo:'/system/outbox/active',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}