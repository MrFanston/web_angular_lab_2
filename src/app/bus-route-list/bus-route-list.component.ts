import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusRouteService, BusRoute } from "../services/bus-route.service";
import {RouterLink} from "@angular/router"; // Импортируем сервис и интерфейс

@Component({
  selector: 'app-bus-route-list',
  templateUrl: './bus-route-list.component.html',
  styleUrls: ['./bus-route-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class BusRouteListComponent implements OnInit {
  public routes: BusRoute[] = [];

  constructor(private busRouteService: BusRouteService) {}

  ngOnInit(): void {
    this.routes = this.busRouteService.getRoutes(); // Получаем рейсы из сервиса
  }
}
