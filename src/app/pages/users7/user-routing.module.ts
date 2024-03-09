import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'list-users',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
  // {
  //   path: "overview",
  //   component: OverviewComponent
  // },
  // {
  //   path: "create",
  //   component: CreateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class UserRoutingModule {}
