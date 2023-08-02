import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';
import { PassengerInfo } from '../passenger.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  booking: any; // Update the type based on your actual data structure
  paymentData: any = {

    cardNumber: '',
    cvv: '',
    expirationDate: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.booking = navigation.extras.state['booking'];
      console.log('Prepopulated Booking Details:', this.booking);
    }
  }
  handlePayment() : void{
    // Card Number Validation

      const cardNumberPattern = /^\d{16}$/;

      const cardNumber = parseInt(this.paymentData.cardNumber, 10); // Convert to number

      if (isNaN(cardNumber) || !cardNumber.toString().match(cardNumberPattern)) {

        alert('Please enter a valid 16-digit card number.');

        return;

      }

 

      // CVV Validation

      const cvvPattern = /^\d{3}$/;

      if (!this.paymentData.cvv.match(cvvPattern)) {

        alert('Please enter a valid 3-digit CVV.');

        return;

      }

 

      // Expiration Date Validation

      const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

      if (!this.paymentData.expirationDate.match(expirationDatePattern)) {

        alert('Please enter a valid expiration date in the MM/YYYY format.');

        return;

      }
   
    // Here, we'll use a timeout to simulate the payment process
    setTimeout(() => {
      // Redirect to the payment confirmed component and pass the booking details as state
      this.router.navigate(['/payment-confirmed'], { state: { booking: this.booking } });
    }, 2000); // Simulated delay of 2 seconds for payment processing
  }
}
