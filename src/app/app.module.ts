import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmedComponent } from './payment-confirmed/payment-confirmed.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CancelConfirmationComponent } from './cancel-confirmation/cancel-confirmation.component';
import { BoardingPassComponent } from './boarding-pass/boarding-pass.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    SearchResultComponent,
    PassengerDetailComponent,
    PaymentComponent,
    PaymentConfirmedComponent,
    LoginComponent,
    DashboardComponent,
    SeatSelectionComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CancelConfirmationComponent,
    BoardingPassComponent,
    ContactUsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
