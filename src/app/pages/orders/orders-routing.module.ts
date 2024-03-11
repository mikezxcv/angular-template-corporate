import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
