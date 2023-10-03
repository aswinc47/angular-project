import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceEnquiryComponent } from './balance-enquiry/balance-enquiry.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    BalanceEnquiryComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnquiryModule { }
