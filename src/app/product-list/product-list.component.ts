import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sortField: string = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  filterCategory: string = '';
  searchText: string = '';
  displayLimit: number = 8;
  displayCount: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.loadUserInputs();
  }

  loadMore(): void {
    this.displayLimit += 8;
  }

  saveUserInputs(): void {
    localStorage.setItem('filter', this.filterCategory);
    localStorage.setItem('search', this.searchText);
    localStorage.setItem('sort', this.sortOrder);
  }

  loadUserInputs(): void {
    this.filterCategory = localStorage.getItem('filter') || '';
    this.searchText = localStorage.getItem('search') || '';
    this.sortOrder = (localStorage.getItem('sort') as 'asc' | 'desc') || 'asc';
  }

  onUserInputChanged(): void {
    this.saveUserInputs();
  }

  onDisplayTotalProductCount(): void {
    this.displayCount = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  hasMoreProducts(): boolean {
    return this.displayLimit < this.products.length;
  }
}
