import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:86/api/products';

  constructor(private http: HttpClient) {}

  searchProducts(filters: any): Observable<Product[]> {
    let params = new HttpParams();
    if (filters.reference) {
      params = params.set('reference', filters.reference);
    }
    if (filters.designation) {
      params = params.set('designation', filters.designation);
    }
    if (filters.categoryId) {
      params = params.set('categoryId', filters.categoryId.toString());
    }
    if (filters.supplierId) {
      params = params.set('supplierId', filters.supplierId.toString());
    }
    if (filters.city) {
      params = params.set('city', filters.city);
    }
    if (filters.disponible !== undefined) {
      params = params.set('disponible', filters.disponible.toString());
    }

    return this.http.get<Product[]>(`${this.apiUrl}/search`, { params });
  }
}