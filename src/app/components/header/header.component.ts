import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayWelcomeHeader: true;

  imageSrc = 'assets/Images/menu2.png';
  user: any[];
  adminRole: any;
  constructor( private router: Router,private authService: AuthService) {
    this.user = [];
    this.displayWelcomeHeader = true;
  }

  ngOnInit() {
    // Subscribe to the login status changes
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  logout() {
    this.authService.setIsLoggedIn(false);
  }

  displayUser() {
    console.log('user : ', this.user);
  }

  handleLogout() {
    localStorage.clear();
    
    this.router.navigate(['/login-page']);
  }

  handleHeaderRemove() {
    
    localStorage.setItem('displayWelcomeHeader', 'false');
  }
}
