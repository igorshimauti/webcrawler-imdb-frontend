import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { MovieReadComponent } from './components/movie-read/movie-read.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

const routes: Routes = [{
  path: "",
  redirectTo: "movie",
  pathMatch: "full"
},
{
  path: "home",
  redirectTo: "movie",
  pathMatch: "full"
},
{
  path: "movie",
  component: MovieReadComponent
},
{
  path: "movie/update/:id",
  component: MovieUpdateComponent
},
{
  path: "movie/delete/:id",
  component: MovieDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
