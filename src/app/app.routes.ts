import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  {path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
  {path: '**' , loadComponent: () => import('./error/error').then(m => m.Error) },
];
