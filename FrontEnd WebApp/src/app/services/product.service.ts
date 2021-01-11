import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

getAllProduct(){
 return    this.httpClient.get(environment.urlBackend+'/get_Allproducts')

}
  getCaddieProduct(caddie_id){
    return    this.httpClient.get(environment.urlBackend+'/getproduct/'+caddie_id)

  }
addProductToCaddie(product){
   return  this.httpClient.post(environment.urlBackend+'/addproduct/'+product.id,product)
}


}
