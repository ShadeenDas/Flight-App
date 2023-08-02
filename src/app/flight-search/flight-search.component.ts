import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  flights: Flight[] = [];
  origin: string = '';
  destination: string = '';
  date: string = '';
  originOptions: string[] = [];
  destinationOptions: string[] = [];

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit() {
    this.flightService.loadOriginAndDestinationOptions().subscribe((options) => {
      this.originOptions = options.origins;
      this.destinationOptions = options.destinations;
    });
  }

  searchFlights() {
    this.flightService
      .searchFlights(this.origin, this.destination, this.date)
      .subscribe((flights) => {
        this.flights = flights;
        this.router.navigate(['/search-result'], { state: { flights: this.flights } });
      });
  }
}
