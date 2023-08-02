import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PassengerInfo } from '../passenger.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<PassengerInfo[]>(this.apiUrl).pipe(
      map((passengers) => {
        const matchedPassenger = passengers.find(
          (passenger) => passenger.email === email && passenger.password === password
        );
        return !!matchedPassenger;
      })
    );
  }
}
