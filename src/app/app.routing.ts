import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { CharactersListComponent }   from './characters-list/characters-list.component';
import { CharacterDetailComponent }   from './character-detail/character-detail.component';
import { PlayerComponent } from './player/player.component'

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'characters-list',
    component: CharactersListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
