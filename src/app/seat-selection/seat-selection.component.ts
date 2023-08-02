import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';


@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  booking: any;
  selectedSeat: string = ''; // For storing the selected seat number

  seatRows: string[][] = [
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5'],
    ['A6', 'B6', 'C6', 'D6', 'E6', 'F6'],
    ['A7', 'B7', 'C7', 'D7', 'E7', 'F7'],
    ['A8', 'B8', 'C8', 'D8', 'E8', 'F8'],
    ['A9', 'B9', 'C9', 'D9', 'E9', 'F9'],
    ['A10', 'B10', 'C10', 'D10', 'E10', 'F10'],
    
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookingId = params.get('bookingId');
      if (bookingId) {
        this.passengerService.getBooking(bookingId).subscribe(booking => {
          this.booking = booking;
          console.log('Seat Selection Booking Data:', this.booking);
        });
      } else {
        console.log('Booking ID not found in the URL.');
      }
    });
  }

  // Method to handle seat selection
  selectSeat(seatNumber: string) {
    this.selectedSeat = seatNumber;
  }

  // Method to save seat selection and flight details
  saveSeatSelection() {
    if (this.selectedSeat) {
      this.passengerService.saveSeatSelection(this.booking.id, this.selectedSeat).subscribe(() => {
        console.log('Seat selection saved successfully.');
        // Navigate back to the dashboard or any other appropriate component
        this.router.navigate(['/boarding-pass', this.booking.id]);
      });
    } else {
      console.log('Please select a seat.');
    }
  }
}
