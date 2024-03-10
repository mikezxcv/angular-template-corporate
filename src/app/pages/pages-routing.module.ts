import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users7/list/list.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
