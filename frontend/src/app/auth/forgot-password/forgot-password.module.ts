import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordPageRoutingModule } from 'src/app/auth/forgot-password/forgot-password-routing.module';

import { ForgotPasswordPage } from 'src/app/auth/forgot-password/forgot-password.page';

@NgModule({
  imports: [
    SharedModule,
    ForgotPasswordPageRoutingModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
