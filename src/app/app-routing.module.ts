import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LobbyComponent} from './lobby/lobby.component';
import {UnderConstructionComponent} from './shared/under-construction/under-construction.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'lobby'},
  {path: 'lobby', component: LobbyComponent},
  {path: 'about', component: UnderConstructionComponent},
  {path: 'game/:id/:name', loadChildren: () => import('./game/game.module').then(g => g.GameModule)},
  {path: '**', component: LobbyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
