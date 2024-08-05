import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/clients'; // URL para o json-server
  private isAuthenticated = false;

  constructor(private snackBar: MatSnackBar, private router: Router, private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe(clients => {
        if (clients.length > 0) {
          this.isAuthenticated = true;
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/clients']);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }

  register(name: string, email: string, password: string): Observable<void> {
    const newClient = { name, email, password };
    return new Observable<void>(observer => {
      this.http.post(this.apiUrl, newClient).subscribe(() => {
        console.log('Usuário registrado:', email);
        observer.next();
        observer.complete();
      });
    });
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
