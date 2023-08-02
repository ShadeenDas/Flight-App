import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../services/passenger.service';


@Component({
  selector: 'app-boarding-pass',
  templateUrl: './boarding-pass.component.html',
  styleUrls: ['./boarding-pass.component.css']
})
export class BoardingPassComponent implements OnInit {
  booking: any;

  constructor(
    private route: ActivatedRoute,
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookingId = params.get('bookingId');
      if (bookingId) {
        this.passengerService.getBooking(bookingId).subscribe(booking => {
          this.booking = booking;
          console.log('Boarding Pass Data:', this.booking);
        });
      } else {
        console.log('Booking ID not found in the URL.');
      }
    });
  }
}
