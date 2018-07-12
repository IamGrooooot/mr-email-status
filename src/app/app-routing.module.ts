import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'system/inbox-active/1',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}