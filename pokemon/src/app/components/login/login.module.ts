import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatSliderModule } from '@angular/material/slider';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
    
  //  MatSliderModule,
  ],
  exports :[
  //  MatSliderModule
//,FlexLayoutModule
  ]

})
export class LoginModule { }
