import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/Product';
import { ProductService } from '../../../../../FoodParkApp/src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }

  deleteProduct(product: Product) {

    this.productService.deleteProduct(product._id).subscribe(data => {
      console.log(data);
      this.getAllProducts();
    });
  }

  updateProduct(product: Product) {
    localStorage.removeItem('productId');
    localStorage.setItem('productId', product._id);
    this.router.navigate(['edit-product']);
  }

}
