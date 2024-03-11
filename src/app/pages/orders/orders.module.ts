import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DataTablesModule,
    NgbDropdownModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class OrdersModule {}
