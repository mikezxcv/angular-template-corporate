import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsRoutingModule } from './comments-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    SharedModule,
    DataTablesModule,
    CommonModule,
    NgbDropdownModule,
    CommentsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CommentsModule {}
