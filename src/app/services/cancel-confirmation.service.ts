import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CancelBooking } from '../cancel-booking-model';


@Injectable({
  providedIn: 'root'
})
export class CancelConfirmationService {
  private apiUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  getBookingDetails(bookingId: number): Observable<CancelBooking> {
    return this.http.get<CancelBooking>(`${this.apiUrl}/${bookingId}`);
  }
}
