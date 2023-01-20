import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {component:ListComponent,path:"list"},
  {component:LoginComponent,path:"login"}
  ];

  // const routes: Routes = [
  //   {path:"user", children:[  {component:ListComponent,path:"list"},
  //   {component:LoginComponent,path:"login"}]}
  // ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleroutingRoutingModule { }
