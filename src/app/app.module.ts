import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AddServiceComponent } from './task/add-service/add-service.component';
import { ManageServiceComponent } from './task/manage-service/manage-service.component';
import { AdddocumentsComponent } from './document/adddocuments/adddocuments.component';
import { ManagedocumentsComponent } from './document/managedocuments/managedocuments.component';
import { CommissionrateComponent } from './commission/commissionrate/commissionrate.component';

import { SubserviceComponent } from './subservice/subservice.component';

import { VendorserviceComponent } from './vendorservice/vendorservice.component';
import { AssignmentsubmitComponent } from './assignmentsubmit/assignmentsubmit.component';
import { ManagecommissionComponent } from './commission/managecommission/managecommission.component';
import { ManagesubservicesComponent } from './subservice/managesubservices/managesubservices.component';
import { VendorrequestComponent } from './vendorrequest/vendorrequest.component';
import { AddsubservicesComponent } from './subservice/addsubservices/addsubservices.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    AddServiceComponent,
    ManageServiceComponent,
    AdddocumentsComponent,
    ManagedocumentsComponent,
    CommissionrateComponent,
  
    SubserviceComponent,
       
        VendorserviceComponent,
                 AssignmentsubmitComponent,
                 ManagecommissionComponent,
                 ManagesubservicesComponent,
                 VendorrequestComponent,
                 AddsubservicesComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
