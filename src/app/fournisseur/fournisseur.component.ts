import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent {

  supplier: Supplier = {};
  productName: string = '';
  filteredSuppliers: Supplier[] = [];
  suppliersDisplayData: any[] = [];

  constructor(private supplierService: SupplierService) {}

  searchSuppliers(): void {
    this.supplierService.searchSuppliers(this.supplier, this.productName).subscribe(
      (suppliers: Supplier[]) => {
        this.filteredSuppliers = suppliers;
        this.suppliersDisplayData = this.filteredSuppliers.map(supplier => ({
          ...supplier,
          productNames: supplier.products ? supplier.products.map(product => product.name).join(', ') : '',
          purchaseOrderIds: supplier.purchaseOrders ? supplier.purchaseOrders.map(order => order.id).join(', ') : ''
        }));
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }


}
