import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageRoutingModule } from 'src/app/auth/login/login-routing.module';

import { LoginPage } from 'src/app/auth/login/login.page';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
