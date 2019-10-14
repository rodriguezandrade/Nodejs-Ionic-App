import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "FoodParkApp/src/app/models/Product";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  products: Product[];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(["add-product"]);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product._id).subscribe(data => {
      console.log(data);
      this.getAllProducts();
    });
  }

  updateProduct(product: Product) {
    localStorage.removeItem("productId");
    localStorage.setItem("productId", product._id);
    this.router.navigate(["edit-product"]);
  }
}
