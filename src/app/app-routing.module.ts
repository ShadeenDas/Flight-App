import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmedComponent } from './payment-confirmed/payment-confirmed.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CancelConfirmationComponent } from './cancel-confirmation/cancel-confirmation.component';
import { BoardingPassComponent } from './boarding-pass/boarding-pass.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flightSearch', component: FlightSearchComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'passenger-detail', component: PassengerDetailComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-confirmed', component: PaymentConfirmedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'seat-selection/:bookingId', component: SeatSelectionComponent },
  { path: 'cancel-confirmation/:bookingId', component: CancelConfirmationComponent },
  { path: 'boarding-pass/:bookingId', component: BoardingPassComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
