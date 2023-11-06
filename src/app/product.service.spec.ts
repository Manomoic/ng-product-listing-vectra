import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should return a copy of products', () => {
    const products = service.getProducts();
    expect(products).toEqual(service['products']);
    expect(products).not.toBe(service['products']);
  });
});
