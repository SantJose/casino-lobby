import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LobbyComponent} from './lobby/lobby.component';
import {UnderConstructionComponent} from './shared/under-construction/under-construction.component';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'lobby'},
  {path: 'lobby', component: LobbyComponent},
  {path: 'about', component: UnderConstructionComponent},
  {path: 'game/:id/:name', loadChildren: () => import('./game/game.module').then(g => g.GameModule)},
  {path: '**', component: LobbyComponent},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled',
      preloadingStrategy: QuicklinkStrategy
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
