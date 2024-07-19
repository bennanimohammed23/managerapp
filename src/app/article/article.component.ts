import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  subSubCategory: any;
  imageUrl!: string;
  priceFilter: number = 0;
  filteredProducts: Product[] = [];

  reference!: string;
  designation!: string;
  categoryId!: number;
  supplierId!: number;
  city!: string;
  disponible!: boolean;

  product: Product = new Product();
 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Initialisez les données si nécessaire
  }

  searchProducts(): void {
    const filters = {
      reference: this.reference,
      designation: this.designation,
      categoryId: this.categoryId,
      supplierId: this.supplierId,
      city: this.city,
      disponible: this.disponible
    };

    this.productService.searchProducts(filters).subscribe((products: Product[]) => {
      this.filteredProducts = products;
    });
  }

  applyFilters(): void {
    // Cette méthode peut être utilisée pour appliquer des filtres supplémentaires si nécessaire
    this.searchProducts();
  }

  goToProductDetail(productId: number): void {
    // Naviguez vers les détails du produit
  }

  
}

