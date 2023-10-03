import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMiniStatementComponent } from './basic-mini-statement/basic-mini-statement.component';
import { CustomisedMiniStatementComponent } from './customised-mini-statement/customised-mini-statement.component';



@NgModule({
  declarations: [
    BasicMiniStatementComponent,
    CustomisedMiniStatementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MiniStatementModule { }
