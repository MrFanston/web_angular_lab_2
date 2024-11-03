import { Component, OnInit } from '@angular/core';
import { BusScheduleService } from '../../services/bus-schedule.service';
import {FilterPanelComponent} from '../filter-panel/filter-panel.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-route-list',
  standalone: true,
  imports: [
    FilterPanelComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './route-list.component.html',
  styleUrl: './route-list.component.css'
})
export class RouteListComponent implements OnInit {
  routes: any[] = [];
  filteredRoutes: any[] = [];

  constructor(private busScheduleService: BusScheduleService) {}

  ngOnInit(): void {
    this.busScheduleService.getRoutes().subscribe(data => {
      this.routes = data.map((route: any) => ({ ...route, showDetails: false }));
      this.filteredRoutes = [...this.routes]; // Изначально показываем все маршруты
    });
  }

  filterRoutes(filterOptions: any) {
    this.filteredRoutes = this.routes
      .filter(route => {
        return (
          (!filterOptions.destination || route.destination.toLowerCase().includes(filterOptions.destination.toLowerCase())) &&
          (!filterOptions.departureTime || route.departureTime >= filterOptions.departureTime) &&
          (!filterOptions.maxDuration || this.getMinutes(route.duration) <= +filterOptions.maxDuration) &&
          (!filterOptions.maxPrice || route.price <= +filterOptions.maxPrice)
        );
      })
      .sort((a, b) => {
        switch (filterOptions.sortBy) {
          case 'price':
            return a.price - b.price;
          case 'duration':
            return this.getMinutes(a.duration) - this.getMinutes(b.duration);
          case 'departureTime':
            return a.departureTime.localeCompare(b.departureTime);
          default:
            return 0;
        }
      });
  }

  // Преобразуем длительность в минуты для сравнения
  getMinutes(duration: string): number {
    const [hours, minutes] = duration.split('h ').map(part => parseInt(part));
    return hours * 60 + minutes;
  }

  toggleDetails(route: any): void {
    route.showDetails = !route.showDetails;
  }
}
