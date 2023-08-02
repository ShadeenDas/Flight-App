import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-cancel-confirmation',
  templateUrl: './cancel-confirmation.component.html',
  styleUrls: ['./cancel-confirmation.component.css']
})
export class CancelConfirmationComponent implements OnInit {
  booking: any;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookingId = params.get('bookingId');
      if (bookingId) {
        this.passengerService.getBooking(bookingId).subscribe(booking => {
          this.booking = booking;
          console.log('Cancel Confirmation Data:', this.booking);
        });
      } else {
        // Handle the case when the bookingId is null (optional)
        console.log('Booking ID not found in the URL.');
      }
    });
  }
  cancelBooking() {
    if (this.booking) {
      // Delete the booking using its ID
      this.passengerService.deleteBookingById(this.booking.id).subscribe(() => {
        console.log('Booking deleted successfully.');
        // Navigate back to the dashboard or any other appropriate component
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
