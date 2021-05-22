import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsubmitComponent } from './assignmentsubmit/assignmentsubmit.component';
import { CommissionrateComponent } from './commission/commissionrate/commissionrate.component';
import { ManagecommissionComponent } from './commission/managecommission/managecommission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdddocumentsComponent } from './document/adddocuments/adddocuments.component';
import { ManagedocumentsComponent } from './document/managedocuments/managedocuments.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AddsubservicesComponent } from './subservice/addsubservices/addsubservices.component';
import { ManagesubservicesComponent } from './subservice/managesubservices/managesubservices.component';
import { SubserviceComponent } from './subservice/subservice.component';

import { AddServiceComponent } from './task/add-service/add-service.component';
import { ManageServiceComponent } from './task/manage-service/manage-service.component';
import { VendorrequestComponent } from './vendorrequest/vendorrequest.component';
import { VendorserviceComponent } from './vendorservice/vendorservice.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full',
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'layout',component:LayoutComponent,children:[
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'adddocument',component:AdddocumentsComponent
      },
      {
        path:'managedocument',component:ManagedocumentsComponent
      },
      {
        path:'addService',component:AddServiceComponent
      },
      {
        path:'manageService',component:ManageServiceComponent
      },
      {
        path:'commissionrate',component:CommissionrateComponent
      },
      {
        path:'managecommission',component:ManagecommissionComponent
      },
      {
        path:'addsubservices',component:AddsubservicesComponent
      },
      {
        path:'managesubservices',component:ManagesubservicesComponent
      },
      {
        path:'vendorservice',component:VendorserviceComponent
      },
      {
        path:'vendorrequest',component:VendorrequestComponent
      },
      {
        path:'assignmentsubmit',component:AssignmentsubmitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
