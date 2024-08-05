import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      icon: 'supervisor_account',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void {
    this.router.navigate(['/clients/create'])
  }

}
