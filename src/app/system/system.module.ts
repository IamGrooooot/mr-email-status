import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SystemComponent } from "./system.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { MomentPipe } from "./shared/pipes/moment.pipe";
import { SomeService } from "./shared/services/some.service";
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from "./shared/components/filter/filter.component";
import { PanelComponent } from './shared/components/panel/panel.component';
import { PreviewComponent } from './shared/components/preview/preview.component';
import { ButtonsComponent } from './shared/components/preview/buttons/buttons.component';
import { InfoComponent } from './shared/components/preview/info/info.component';
import { FilesComponent } from './shared/components/preview/files/files.component';
import { ReportComponent } from './shared/components/preview/report/report.component';
import { EmailService } from "./shared/services/email.services";

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
    TableComponent,
    FilterComponent,
    PanelComponent,
    PreviewComponent,
    ButtonsComponent,
    InfoComponent,
    FilesComponent,
    ReportComponent
  ],
  providers: [
    SomeService,
    EmailService
  ]
})
export class SystemModule{

}