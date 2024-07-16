import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:86/api/clients';

  constructor(private http: HttpClient) {}

  searchClients(client: Client): Observable<Client[]> {
    let params = new HttpParams();
    if (client.societe) {
      params = params.append('societe', client.societe);
    }
    if (client.contact) {
      params = params.append('contact', client.contact);
    }
    if (client.email) {
      params = params.append('email', client.email);
    }
    if (client.phone) {
      params = params.append('phone', client.phone);
    }
    if (client.profilSociete) {
      params = params.append('profilSociete', client.profilSociete);
    }
    if (client.categorie) {
      params = params.append('categorie', client.categorie);
    }
    if (client.sousCategorie) {
      params = params.append('sousCategorie', client.sousCategorie);
    }
    if (client.actif != null) {
      params = params.append('actif', client.actif.toString());
    }
    if (client.bloque != null) {
      params = params.append('bloque', client.bloque.toString());
    }
    if (client.typeClient) {
      params = params.append('typeClient', client.typeClient);
    }
    return this.http.get<Client[]>(`${this.apiUrl}/search`, { params });
  }
}
