import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    NgbDropdownModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class Users7Module {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
