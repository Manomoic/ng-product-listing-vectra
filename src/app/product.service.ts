import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      name: 'Phone XL',
      price: 799,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Mini',
      price: 699,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Standard',
      price: 299,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Special',
      price: 999,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone X',
      price: 899,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Mini',
      price: 699,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Standard',
      price: 299,
      category: 'iPad',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Special',
      price: 999,
      category: 'iPad',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone XL',
      price: 799,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Mini',
      price: 699,
      category: 'Mini',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Standard',
      price: 299,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phone Special',
      price: 999,
      category: 'Phones',
      image: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products.slice();
  }
}
