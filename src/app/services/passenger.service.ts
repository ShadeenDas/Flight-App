import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PassengerInfo } from '../passenger.model';
import { Flight } from '../flight.model';


@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private apiUrl = 'http://localhost:3000/passengers';
  private bookingsUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  savePassenger(passenger: PassengerInfo): Observable<PassengerInfo> {
    return this.http.post<PassengerInfo>(this.apiUrl, passenger);
  }
  saveBooking(passenger: PassengerInfo, flight: Flight): Observable<any> {
    const booking = { passenger, flight };
    return this.http.post(this.bookingsUrl, booking);
  }
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.bookingsUrl);
  }
  getBooking(bookingId: string): Observable<any> {
    const url = `${this.bookingsUrl}/${bookingId}`;
    return this.http.get<any>(url);
  }
  deleteBookingById(bookingId: string): Observable<void> {
    const url = `${this.bookingsUrl}/${bookingId}`;
    return this.http.delete<void>(url);
  }
  saveSeatSelection(bookingId: string, seatNumber: string): Observable<void> {
    const url = `${this.bookingsUrl}/${bookingId}`;
    // Fetch the existing booking data from the server and update the seatNumber property
    return this.http.get<any>(url).pipe(
      map((booking) => {
        booking.seatNumber = seatNumber;
        return booking;
      }),
      switchMap((updatedBooking) => this.http.put<void>(url, updatedBooking))
    );
  }
}
