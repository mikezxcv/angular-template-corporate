import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './orders/list/list.component';
// Component pages

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users7/users7.module').then((m) => m.Users7Module),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentsModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
