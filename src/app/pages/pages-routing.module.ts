import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './comments/list/list.component';
import { CommentsRoutingModule } from './comments/comments-routing.module';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
