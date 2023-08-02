import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) {}

  searchFlights(origin: string, destination: string, date: string): Observable<Flight[]> {
    const params = { origin, destination, date };
    return this.http.get<Flight[]>(this.apiUrl, { params });
  }

  loadOriginAndDestinationOptions(): Observable<{ origins: string[]; destinations: string[] }> {
    return this.http.get<Flight[]>(this.apiUrl).pipe(
      map((flights) => {
        const uniqueOrigins = [...new Set(flights.map((flight) => flight.origin))];
        const uniqueDestinations = [...new Set(flights.map((flight) => flight.destination))];
        return { origins: uniqueOrigins, destinations: uniqueDestinations };
      })
    );
  }
}
