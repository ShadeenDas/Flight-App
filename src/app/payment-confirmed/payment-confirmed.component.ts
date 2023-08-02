import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';
import { PassengerInfo } from '../passenger.model';

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.css']
})
export class PaymentConfirmedComponent {
  booking: any; // Update the type based on your actual data structure

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.booking = navigation.extras.state['booking'];
      console.log('Payment Confirmed: Booking Details:', this.booking);
    }
  }
  checkBoardingPass() {
    // Implement any logic you need before redirecting to the login component

    // Redirect to the login component
    this.router.navigate(['/login']);
  }
}
