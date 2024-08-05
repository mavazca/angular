import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public authService: AuthService) { }

  onLogout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
