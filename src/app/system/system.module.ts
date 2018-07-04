import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SystemComponent } from "./system.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { MomentPipe } from "./shared/pipes/moment.pipe";
import { SomeService } from "./shared/services/some.service";
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { PageComponent } from './page/page.component';
import { FilterComponent } from "./shared/components/filter/filter.component";

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations:[
    NavbarComponent,
    SystemComponent,
    MomentPipe,
    PaginationComponent,
    PageComponent,
    FilterComponent
  ],
  providers: [
    SomeService
  ]
})
export class SystemModule{

}