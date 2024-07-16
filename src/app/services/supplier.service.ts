import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = 'http://localhost:86/api/suppliers';

  constructor(private http: HttpClient) {}

  searchSuppliers(supplier: Supplier, productName: string): Observable<Supplier[]> {
    let params = new HttpParams();
    if (supplier.name) {
      params = params.append('name', supplier.name);
    }
    if (supplier.contact) {
      params = params.append('contact', supplier.contact);
    }
    if (supplier.email) {
      params = params.append('email', supplier.email);
    }
    if (supplier.phone) {
      params = params.append('phone', supplier.phone);
    }
    if (productName) {
      params = params.append('productName', productName);
    }
    return this.http.get<Supplier[]>(`${this.apiUrl}/search`, { params });
  }
}
