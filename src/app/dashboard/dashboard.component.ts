import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  bookings: any[] = [];
  completedFlights: any[] = [];
  upcomingFlights: any[] = [];
  cancelledFlights: any[] = [];


  // constructor(private router: Router, private passengerService: PassengerService) {
  //   // Fetch the prepopulated booking details from bookings.json
  //   this.passengerService.getBookings().subscribe((bookings) => {
  //     this.bookings = bookings;
  //     console.log('Prepopulated Booking Details:', this.bookings);
  //   });
  // }
  constructor(
    private router: Router,
    private passengerService: PassengerService,
    private authService: AuthService // Inject the AuthService
  ) {
    // Fetch the prepopulated booking details from bookings.json for the current user
    const currentUserEmail = this.authService.getCurrentUserEmail();
    this.passengerService.getBookings().subscribe((bookings) => {
      this.bookings = bookings.filter((booking) => booking.passenger.email === currentUserEmail);
      console.log('Prepopulated Booking Details:', this.bookings);
    });
  }
  logout() {
    // Clear the current user's email and navigate back to the flight-search component
    this.authService.logout();
    this.router.navigate(['/']);
  }
  webCheckIn(booking: any) {
    this.router.navigate(['/seat-selection', booking.id]);
    console.log(`Web check-in for booking: ${booking.id}`);
    
  }

  cancelBooking(booking: any) {
    // Implement the cancel booking logic here
    console.log(`Cancel booking: ${booking.id}`);
    // const index = this.bookings.findIndex((b) => b.id === booking.id);
    // if (index !== -1) {
    //   this.bookings.splice(index, 1);
    //   console.log(`Booking with ID ${booking.id} is canceled.`);
    //   // Here, you can call a service method to delete the booking on the server (if applicable).
    // }
  }
  redirectToCancelConfirmation(bookingId: string) {
    // Redirect to the cancel confirmation component with the bookingId as a parameter
    this.router.navigate(['/cancel-confirmation', bookingId]);
  }
}
