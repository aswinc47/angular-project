import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';



@NgModule({
  declarations: [
    AddCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerManageModule { }
