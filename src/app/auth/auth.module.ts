import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class AuthModule {
}
