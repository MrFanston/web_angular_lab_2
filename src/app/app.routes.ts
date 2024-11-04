import { Routes } from '@angular/router';
import { BusRouteListComponent } from './bus-route-list/bus-route-list.component';
import { BusRouteDetailComponent } from './bus-route-detail/bus-route-detail.component';

export const routes: Routes = [
    { path: '', component: BusRouteListComponent },
    { path: 'route/:destination', component: BusRouteDetailComponent }, // Маршрут для страницы с деталями маршрута
];
