import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountComponent } from './new-account/new-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';



@NgModule({
  declarations: [
    NewAccountComponent,
    EditAccountComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
