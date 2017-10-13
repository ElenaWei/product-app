import { Component } from '@angular/core';
import { Product } from './product';

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
  styleUrls: ['./styles/productList.css']
})
export class AppComponent {
  title = 'List of Products';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }
}


const PRODUCTS: Product[] = [
  {id:11, name:'ThinkPab', description:'T430',price: 999, condition: "new", category: "laptop"},
  {id:12, name:'Iphone', description:'7 Plus', price: 799, condition: "new", category: "mobile phone"},
  {id:13, name:'Samsung', description:'Galaxy S8', price: 825, condition: "new", category: "mobile phone"},
  {id:14, name:'Cartier', description:'W69010Z4', price: 2999, condition: "new", category: "watch"},
  {id:15, name:'Rolex', description:'116610LV', price: 6999, condition: "used", category: "watch"},
  {id:16, name:'MacBook', description:'Air', price: 999, condition: "new", category: "laptop"},
];


