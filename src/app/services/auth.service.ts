import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserEmail: string | null = null;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  // Method to get the login status as an observable
  public get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }
  // Method to check if the user is logged in
  public getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.getValue();
  }

  // Method to set the login status
  public setIsLoggedIn(status: boolean): void {
    this.isLoggedInSubject.next(status);
  }

  login(email: string, password: string): boolean {
    // Implement your login logic here. For example, check the email and password against the data in passengers.json.
    // If the login is successful, set the currentUserEmail to the logged-in user's email and return true.
    // Otherwise, return false.
    const isValidLogin = true; // Replace with your actual login logic.
    if (isValidLogin) {
      this.currentUserEmail = email;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Implement your logout logic here. For example, clear the currentUserEmail when the user logs out.
    this.currentUserEmail = null;
  }

  getCurrentUserEmail(): string | null {
    return this.currentUserEmail;
  }
}
