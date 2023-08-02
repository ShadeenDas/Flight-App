import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';
import { PassengerInfo } from '../passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent {
  flight!: Flight;
  passenger: PassengerInfo = {
    name: '',
    age: 0,
    gender: '',
    email: '',
    mobile: '',
    password: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private passengerService : PassengerService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.flight = history.state.flight;
    });
  }

  bookFlight() {
    //  form submission and the booking process.
    console.log('Passenger Details:', this.passenger);
    console.log('Flight Details:', this.flight);

    // Save the passenger information using the PassengerService
    this.passengerService.savePassenger(this.passenger).subscribe(
      (savedPassenger) => {
        console.log('Passenger information saved successfully:', savedPassenger);

        // Save the booking information using the PassengerService
        this.passengerService.saveBooking(savedPassenger, this.flight).subscribe(
          (booking) => {
            console.log('Booking information saved successfully:', booking);
           
            this.router.navigate(['/payment'], { state: { booking } });
          },
          (error) => {
            console.error('Error saving booking information:', error);
            // Here, you can handle errors, such as showing an error message to the user.
          }
        );
      },
      (error) => {
        console.error('Error saving passenger information:', error);
        // Here, you can handle errors, such as showing an error message to the user.
      }
    );
  }
}


