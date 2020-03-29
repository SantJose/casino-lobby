import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from './games/games.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'games'},
  {path: 'games', component: GamesComponent},
  {path: '**', component: GamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
