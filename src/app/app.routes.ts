import { Routes } from '@angular/router';
import { AProposComponent } from './pages/page-a-propos/a-propos.component';
import { BibliothequeComponent } from './pages/bibliotheque/bibliotheque.component';
import { PageAdministrationComponent } from './pages/page-administration/page-administration.component';

export const routes: Routes = [
  {
    path: 'home',
    component: BibliothequeComponent,
    title: 'app-musique-taborinInes',
  },
  {
    path: 'about',
    component: AProposComponent,
    title: 'About',
  },
  {
    path: 'administration',
    component: PageAdministrationComponent,
    title: 'Administration'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
