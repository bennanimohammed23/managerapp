import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {

  quote: Quote = {};
  quotes: Quote[] = [];
  clientId?: number;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {}

  searchQuotes() {
    if (this.clientId) {
      this.quote.clientId = this.clientId;
    }
    this.quoteService.searchQuotes(this.quote).subscribe(
      data => this.quotes = data,
      error => console.error('Error fetching quotes', error)
    );
  }
 
}
