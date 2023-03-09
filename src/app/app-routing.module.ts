import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { EmployeeComponent } from './routing/employee/employee.component';
import { AboutcompanyComponent } from './routing/aboutcompany/aboutcompany.component';
import { EmplistingComponent } from './routing/emplisting/emplisting.component';
import { EmpaddComponent } from './routing/empadd/empadd.component';
import { ErrorComponent } from './error/error.component';
import { LoginrouteComponent } from './routing/loginroute/loginroute.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { ViewuserComponent } from './routing/canactivegaurd/viewuser/viewuser.component';
import { AdduserComponent } from './routing/canactivegaurd/adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { ChildGuard } from './guard/child.guard';

const routes: Routes = [
  
  // {component: HomeComponent,path:"",canActivate:[AuthGuard]},
  // {component: AboutComponent,path:"About",children: [{component: AboutcompanyComponent,path:"company"}],canActivate:[AuthGuard]},
  // {component: EmployeeComponent,path:"Employee",
  //   children:[{component:EmplistingComponent,path:""},
  //         {component:EmpaddComponent,path:"Edit/:id"}
  //       ],canActivate:[AuthGuard]  

  // },
  // {component:LoginrouteComponent,path:"loginroute",canActivate:[AuthGuard]},
  // {component: ErrorComponent,path:"**"}

  // ];

  {component: EmplistingComponent,path:"",canActivate:[AuthGuard]},
  {component: AboutComponent,path:"About",children: [
    {component: AboutcompanyComponent,path:"company"}
  ], canActivate:[RoleGuard]},
  {component: EmployeeComponent,path:"Employee",
    children:[{component:EmplistingComponent,path:""},
          {component:EmpaddComponent,path:"Edit/:id"}
        ]  

  },
  {component:LoginrouteComponent,path:"loginroute"},
  // //can active child
  // {component: UserComponent,path:"user",children:[
  //   {component: ViewuserComponent, path:"view"},
  // {component : AdduserComponent,path:"edit"}
  // ], canActivate:[RoleGuard], canActivateChild:[ChildGuard]},

  //can deactive
  //   {component: UserComponent,path:"user",children:[
  //   {component: ViewuserComponent, path:"view"},
  // {component : AdduserComponent,path:"edit",canDeactivate:[ChildGuard]}
  // ], canActivate:[RoleGuard]},

  {component: ErrorComponent,path:"**"}, 

  { 
    path: "user",
    loadChildren:()=>import('./lazyload/user/user.module').then( x=>x.UserModule)
  }

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
