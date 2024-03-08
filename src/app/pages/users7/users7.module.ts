import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, DataTablesModule],
})
export class Users7Module {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
