import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService : AuthService,
    ) {}

  // login() {
  //   this.loginService.login(this.email, this.password).subscribe((isLoggedIn) => {
  //     if (isLoggedIn) {
  //       // If login is successful, navigate to the passenger-detail component
  //       // this.router.navigate(['/passenger-detail']);
  //       this.router.navigate(['/dashboard']);
  //       console.log('Login Successful');
  //     } else {
  //       // If login fails, set the loginError flag to true
  //       console.log("Invalid Login")
  //       this.loginError = true;
  //     }
  //   });
  // }
  login() {
    const isLoggedIn = this.authService.login(this.email, this.password);
    if (isLoggedIn) {
      this.authService.setIsLoggedIn(true);
      // If login is successful, navigate to the dashboard component
      this.router.navigate(['/dashboard']);
    } else {
      // If login fails, set the loginError flag to true
      this.loginError = true;
    }
  }
}
