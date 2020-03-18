import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ ListComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HiveModule {
}
