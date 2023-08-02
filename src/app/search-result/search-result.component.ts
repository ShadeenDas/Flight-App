import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.flights = history.state.flights || [];
    });
  }
  bookNow(flight: Flight) {
    this.router.navigate(['/passenger-detail'], { state: { flight } });
  }
}
