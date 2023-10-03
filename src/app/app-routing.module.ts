import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { AddCustomerComponent } from './customer-manage/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer-manage/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer-manage/delete-customer/delete-customer.component';
import { DepositComponent } from './transaction/deposit/deposit.component';
import { WithdrawComponent } from './transaction/withdraw/withdraw.component';
import { FundTransferComponent } from './transaction/fund-transfer/fund-transfer.component';
import { BasicMiniStatementComponent } from './mini-statement/basic-mini-statement/basic-mini-statement.component';
import { CustomisedMiniStatementComponent } from './mini-statement/customised-mini-statement/customised-mini-statement.component';
import { BalanceEnquiryComponent } from './enquiry/balance-enquiry/balance-enquiry.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'create-account', component: NewAccountComponent },
      { path: 'edit-account', component: EditAccountComponent },
      { path: 'delete-account', component: DeleteAccountComponent },
      { path: 'create-customer', component: AddCustomerComponent },
      { path: 'edit-customer', component: EditCustomerComponent },
      { path: 'delete-customer', component: DeleteCustomerComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'fund-transfer', component: FundTransferComponent },
      { path: 'mini-statement', component: BasicMiniStatementComponent },
      {
        path: 'customised-mini-statement',
        component: CustomisedMiniStatementComponent,
      },
      { path: 'balance-enquiry', component: BalanceEnquiryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
