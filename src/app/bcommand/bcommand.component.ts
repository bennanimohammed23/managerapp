import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Order } from '../models/order';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-bcommand',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './bcommand.component.html',
  styleUrl: './bcommand.component.css'
})
export class BcommandComponent {

  order: Order = {};
  orders: Order[] = [];
  clientId?: number;

  constructor(private orderService: CommandeService) {}

  ngOnInit(): void {}

  searchOrders() {
    if (this.clientId) {
      this.order.client = { id: this.clientId } as any;
    }
    this.orderService.searchOrders(this.order).subscribe(
      data => this.orders = data,
      error => console.error('Error fetching orders', error)
    );
  }

}
