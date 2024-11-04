// services/bus-route.service.ts
import { Injectable } from '@angular/core';

export interface BusStop {
  station: string;
  arrivalTime: string;
}

export interface BusRoute {
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: BusStop[];
  mapImagePath: string; // Добавляем путь к изображению
}

@Injectable({
  providedIn: 'root'
})
export class BusRouteService {
  private routes: BusRoute[] = [
    {
      destination: 'Варгаши',
      departureTime: '08:00',
      arrivalTime: '8:50',
      duration: '50мин',
      price: 161,
      stops: [
        {station: 'Колташево, поворот', arrivalTime: '08:26'},
        {station: 'Сычево', arrivalTime: '08:34'},
      ],
      mapImagePath: 'Var.jpg'
    },
    {
      destination: 'Петухово',
      departureTime: '10:55',
      arrivalTime: '13:50',
      duration: '2ч 55мин',
      price: 589,
      stops: [
        {station: 'Варгаши, поворот', arrivalTime: '11:39'},
        {station: 'Щучье/Попово, поворот', arrivalTime: '11:54'},
        {station: 'Камышное, поворот', arrivalTime: '12:03'},
        {station: 'Арлагуль, поворот', arrivalTime: '12:16'},
        {station: 'Макушино, поворот', arrivalTime: '13:02'},
        {station: 'Рынки', arrivalTime: '13:29'},
        {station: 'Староберезово', arrivalTime: '13:35'},
      ],
      mapImagePath: 'Pet.jpg'
    },
    {
      destination: 'Куртамыш',
      departureTime: '13:00',
      arrivalTime: '14:28',
      duration: '1ч 28мин',
      price: 428,
      stops: [
        {station: 'Сады "Бодрость"', arrivalTime: '13:24'},
        {station: 'Новокомогоровка', arrivalTime: '13:30'},
        {station: 'Сады "Сладкий Лог"', arrivalTime: '13:27'},
        {station: 'Шмаково', arrivalTime: '13:45'},
        {station: 'Степное', arrivalTime: '13:58'},
        {station: 'Ключики', arrivalTime: '14:04'},
        {station: 'Пушкино', arrivalTime: '14:13'},
      ],
      mapImagePath: 'Kur.jpg'
    },
  ];

  constructor() {
  }

  getRoutes(): BusRoute[] {
    return this.routes;
  }

  findRouteByDestination(destination: string): BusRoute | undefined {
    return this.routes.find(route => route.destination === destination);
  }
}
