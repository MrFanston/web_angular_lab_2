import { Routes } from '@angular/router';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/routes', pathMatch: 'full' }, // Редирект на основной маршрут
  { path: 'routes', component: RouteListComponent },
  { path: 'routes/:id', component: RouteDetailComponent }, // для отображения деталей по ID маршрута
  { path: '**', redirectTo: '/routes' } // перенаправление на страницу списка маршрутов для неизвестных URL
];
