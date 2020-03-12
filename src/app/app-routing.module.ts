import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { SecureInnerPagesGuard } from './auth/guard/secure-inner-pages.guard';


const routes: Routes = [
  { path: '', redirectTo: 'hives', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [ SecureInnerPagesGuard ]
  },
  {
    path: 'hives',
    loadChildren: () => import('./hive/hive.module').then(m => m.HiveModule),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
