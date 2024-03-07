import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Router, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-users',
    component: ListComponent,
  },
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
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class UserRoutingModule {}