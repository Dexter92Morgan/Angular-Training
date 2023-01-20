import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentForNewmoduleComponent } from './component-for-newmodule/component-for-newmodule.component';



@NgModule({
  declarations: [
    ComponentForNewmoduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentForNewmoduleComponent
  ]
})
export class LoginModule { }
