import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignupPageRoutingModule } from 'src/app/auth/signup/signup-routing.module';

import { SignupPage } from 'src/app/auth/signup/signup.page';

@NgModule({
  imports: [
    SharedModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
