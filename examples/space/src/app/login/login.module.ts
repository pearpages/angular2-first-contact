import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login.form.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginFormComponent],
  declarations: [
    LoginFormComponent
  ],
  providers: [],
})
export class LoginModule {
  static forRoot() {
    return {
      ngModule: LoginModule,
      providers: [ LoginService ]
    };
  }
}
