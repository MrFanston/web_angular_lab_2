import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BusRouteService, BusRoute } from '../services/bus-route.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-bus-route-detail',
  standalone: true,
  templateUrl: './bus-route-detail.component.html',
  styleUrls: ['./bus-route-detail.component.scss'],
  imports: [NgIf, RouterLink, CurrencyPipe, NgForOf]
})
export class BusRouteDetailComponent implements OnInit {
  public route: BusRoute | undefined;

  constructor(
    private routeService: BusRouteService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const destination = this.activatedRoute.snapshot.paramMap.get('destination');
    if (destination) {
      this.route = this.routeService.findRouteByDestination(destination);
    }
  }
}
