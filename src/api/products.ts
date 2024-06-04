import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDetails';
import { client } from './fetchClient';

export function getProducts() {
  return client.get<Product[]>('/products.json');
}

export function getProductDetails(productId: string) {
  return client.get<ProductDetails>(`/products/${productId}.json`);
}
