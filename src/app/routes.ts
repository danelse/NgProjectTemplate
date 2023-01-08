import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found-page/page-not-found-page.component').then(m => m.PageNotFoundPageComponent),
    pathMatch: 'full',
  },
];

export default routes;