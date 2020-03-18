import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forFeature([UserEffects])
  ],
})
export class AuthModule {
}
