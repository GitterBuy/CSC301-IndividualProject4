import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinsRepositoryComponent } from './coins-repository/coins-repository.component';

const routes: Routes = [{
  path: '',
  component: CoinsRepositoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
