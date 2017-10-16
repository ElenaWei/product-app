import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <h2>My products</h2>
     <ul class = "products">
       <li *ngFor = "let product of products"
         [class.selected]= "product === selectedProduct"
         (click) = "onSelect(product)">
         <!--each product goes here -->
         <span class = "badge">{{product.id}}</span>{{product.name}}
       </li>
     </ul>
    <product-detail [product]="selectedProduct"></product-detail>
  `,
  providers: [ProductService],
  styleUrls: ['./styles/productList.css']
})
export class AppComponent implements OnInit {
  title = 'List of Products';
  //products = PRODUCTS;
  selectedProduct: Product;
  products: Product[];

  constructor(private productService: ProductService){ }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.productService.getProducts().then(products =>this.products = products);
  }

}



