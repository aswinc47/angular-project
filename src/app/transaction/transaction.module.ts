import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [
    FundTransferComponent,
    WithdrawComponent,
    DepositComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
