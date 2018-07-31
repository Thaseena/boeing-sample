import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule, BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component';
import { AddsupplierComponent } from './supplier/addsupplier/addsupplier.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { RolelistComponent } from './role/rolelist/rolelist.component';
import { AddroleComponent } from './role/addrole/addrole.component';
import { EditroleComponent } from './role/editrole/editrole.component';
import { SupplierlistComponent } from './supplier/supplierlist/supplierlist.component';
import { EditsupplierComponent } from './supplier/editsupplier/editsupplier.component';
import { SupplierdetailsComponent } from './supplier/supplierdetails/supplierdetails.component';
import { AssessmentlistComponent } from './assessment/assessmentlist/assessmentlist.component';
import { AddsupplierassessmentComponent } from './assessment/addsupplierassessment/addsupplierassessment.component';
import { SupplierassessmentdetailsComponent } from './assessment/supplierassessmentdetails/supplierassessmentdetails.component';
import { AssessmentdetailsComponent } from './assessment/assessmentdetails/assessmentdetails.component';
import { ComparelistComponent } from './compare/comparelist/comparelist.component';
import { ComparisonComponent } from './compare/comparison/comparison.component';

import { BackendHeaderApiService } from './services/backend-header-api.service';
import { Globals } from './globals';
import { AuthService } from './auth/auth.service';
import { DashboardApiService } from './services/dashboard-api.service';
import { CommonService } from './services/common.service';


import { ExpandCollapseDirective } from './directives/expand-collapse.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BreadcrumbComponent,
    FooterComponent,
    DashboardComponent,
    SearchResultComponent,
    LoginComponent,
    AddsupplierComponent,
    UserlistComponent,
    AdduserComponent,
    EdituserComponent,
    RolelistComponent,
    AddroleComponent,
    EditroleComponent,
    ExpandCollapseDirective,
    SupplierlistComponent,
    EditsupplierComponent,
    SupplierdetailsComponent,
    UserdetailsComponent,
    AssessmentlistComponent,
    AddsupplierassessmentComponent,
    SupplierassessmentdetailsComponent,
    AssessmentdetailsComponent,
    ComparelistComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    McBreadcrumbsModule.forRoot(),
    BsDatepickerModule .forRoot(),
    NgxDatatableModule
  ],
  providers: [
    BackendHeaderApiService,
    DashboardApiService,
    Globals,
    AuthService,
    CommonService,
    {provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
