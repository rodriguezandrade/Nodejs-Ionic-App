import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAllProducts(){
    return this.http.get<Product[]>(this.baseurl + 'Products');
  }

  getProductById(id: string){
    return this.http.get<Product>(this.baseurl + 'Products' + '/' + id);
  }

  addProduct(product: Product){
    return this.http.post(this.baseurl + 'Products', product);
  }

  deleteProduct(id: string){
    return this.http.delete(this.baseurl + 'Products' + '/' + id);
  }

  updateProduct(product: Product){
    return this.http.put(this.baseurl + 'Products' + '/' + product._id, product);
  }
}
