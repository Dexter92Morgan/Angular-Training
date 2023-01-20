import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { DirectivenameDirective } from './directivename.directive';
import { HeaderComponent } from './header/header.component';
import { ComponentinlineComponent } from './componentinline/componentinline.component';
import { ComponentinlinetempleteComponent } from './componentinlinetemplete/componentinlinetemplete.component';
import { ComponentinlinestyleAndInlinetemplateComponent } from './componentinlinestyle-and-inlinetemplate/componentinlinestyle-and-inlinetemplate.component';
import { LoginModule } from './login/login.module';
import { AuthModule} from './auth/auth.module';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule} from '@angular/forms';
import { FontchangeDirective } from './direct/fontchange.directive';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { CustompipePipe } from './pipes/custompipe/custompipe.pipe';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding/twowaybinding.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { EmployeeComponent } from './routing/employee/employee.component';
import { AboutcompanyComponent } from './routing/aboutcompany/aboutcompany.component';
import { EmplistingComponent } from './routing/emplisting/emplisting.component';
import { EmpaddComponent } from './routing/empadd/empadd.component';
import { ErrorComponent } from './error/error.component';
import { ModuleroutingRoutingModule} from './modulerouting/modulerouting-routing.module';
import { LoginrouteComponent } from './routing/loginroute/loginroute.component';
import { UserComponent } from './user/user.component';
import { ValidatorsComponent } from './validators/validators.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    DirectivenameDirective,
    HeaderComponent,
    ComponentinlineComponent,
    ComponentinlinetempleteComponent,
    ComponentinlinestyleAndInlinetemplateComponent,
    DirectivesComponent,
    FontchangeDirective,
    PopupComponent,
    PipesComponent,
    CustompipePipe,
    TwowaybindingComponent,
    ChildcompComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    AboutcompanyComponent,
    EmplistingComponent,
    EmpaddComponent,
    ErrorComponent,
    LoginrouteComponent,
    UserComponent,
    ValidatorsComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ModuleroutingRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
