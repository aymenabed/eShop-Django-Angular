import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// pour injecter services dans n'importe quel component
@Injectable({
  providedIn: 'root',
})

// class produit service
export class ProductService {
  // httpclient "axios" communication à traverse Le protocole HTTP
  constructor(private httpClient: HttpClient) {}

  // fonction get all products
  getAllProduct() {
    return this.httpClient.get(environment.urlBackend + '/get_Allproducts');
  }

  // fonction get all products appartient à caddie
  getCaddieProduct(caddie_id) {
    return this.httpClient.get(
      environment.urlBackend + '/getproduct/' + caddie_id
    );
  }

  // fonction add product to caddie
  addProductToCaddie(product) {
    return this.httpClient.post(
      environment.urlBackend + '/addproduct/' + product.id,
      product
    );
  }
}
