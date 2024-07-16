import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  client: Client = new Client();
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  searchClients() {
    this.clientService.searchClients(this.client).subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
