import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = 'http://localhost:86/api/customer-orders';

  constructor(private http: HttpClient) {}

  searchOrders(order: Order): Observable<Order[]> {
    let params = new HttpParams();
    if (order.status) {
      params = params.append('status', order.status);
    }
    if (order.client && order.client.id) {
      params = params.append('clientId', order.client.id.toString());
    }
    if (order.orderDate) {
      params = params.append('orderDate', order.orderDate);
    }
    if (order.code) {
      params = params.append('code', order.code);
    }
    if (order.typeBC) {
      params = params.append('typeBC', order.typeBC);
    }
    if (order.typeNBT) {
      params = params.append('typeNBT', order.typeNBT);
    }
    if (order.projet) {
      params = params.append('projet', order.projet);
    }
    if (order.actif !== undefined) {
      params = params.append('actif', order.actif.toString());
    }
    if (order.valide !== undefined) {
      params = params.append('valide', order.valide.toString());
    }
    if (order.montant) {
      params = params.append('montant', order.montant.toString());
    }
    if (order.contactCadre) {
      params = params.append('contactCadre', order.contactCadre);
    }
    if (order.nature) {
      params = params.append('nature', order.nature);
    }
    return this.http.get<Order[]>(`${this.apiUrl}/search`, { params });
  }
}