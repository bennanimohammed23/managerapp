import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'http://localhost:86/api/quotes';

  constructor(private http: HttpClient) {}

  searchQuotes(quote: Quote): Observable<Quote[]> {
    let params = new HttpParams();
    if (quote.code) {
      params = params.append('code', quote.code);
    }
    if (quote.revision) {
      params = params.append('revision', quote.revision);
    }
    if (quote.objet) {
      params = params.append('objet', quote.objet);
    }
    if (quote.actif !== undefined) {
      params = params.append('actif', quote.actif.toString());
    }
    if (quote.valide !== undefined) {
      params = params.append('valide', quote.valide.toString());
    }
    if (quote.statut) {
      params = params.append('statut', quote.statut);
    }
    if (quote.montant) {
      params = params.append('montant', quote.montant.toString());
    }
    if (quote.nature) {
      params = params.append('nature', quote.nature);
    }
    if (quote.projet) {
      params = params.append('projet', quote.projet);
    }
    if (quote.clientId) {
      params = params.append('clientId', quote.clientId.toString());
    }
    return this.http.get<Quote[]>(`${this.apiUrl}/search`, { params });
  }
}
