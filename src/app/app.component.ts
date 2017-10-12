import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: 
  `
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
      
    <div *ngIf = "selectedProduct">
      <h2>Details about the {{selectedProduct.name}}!</h2>
        <div class = "d">
        <label>id: </label>{{selectedProduct.id}}
        </div>
        <div class = "d">
            <label>name: </label>{{selectedProduct.name}}
        </div>
        <div class = "d">
            <label>description: </label>{{selectedProduct.description}}
        </div>
        <div class = "d">
            <label>price: </label>{{selectedProduct.price}}
        </div>
        <div class = "d">
            <label>condition: </label>{{selectedProduct.condition}}
        </div>
        <div class = "d">
            <label>category: </label>{{selectedProduct.category}}
        </div>
        <br>

        <div class = "input">
            <label>name: </label>
            <input [(ngModel)] ="selectedProduct.name" placeholder="name"/>
        </div>
    </div>
         
      `,
  styles: [`
      .d {
        font-size: 16pt;
        border: 1px solid black;
        width: 300px;
      }
      .input {
        font-size: 18pt;
        color: red;
      }
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .products {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .products li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .products li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .products li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .products .text {
        position: relative;
        top: -3px;
      }
      .products .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
  `]
})
export class AppComponent {
  title = 'List of Products';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }
}

export class Product{
  id: number;
  name: string;
  description: string;
  price: number;
  condition: string;
  category: string;
}

const PRODUCTS: Product[] = [
  {id:11, name:'ThinkPab', description:'T430',price: 999, condition: "new", category: "laptop"},
  {id:12, name:'Iphone', description:'7 Plus', price: 799, condition: "new", category: "mobile phone"},
  {id:13, name:'Samsung', description:'Galaxy S8', price: 825, condition: "new", category: "mobile phone"},
  {id:14, name:'Cartier', description:'W69010Z4', price: 2999, condition: "new", category: "watch"},
  {id:15, name:'Rolex', description:'116610LV', price: 6999, condition: "used", category: "watch"},
  {id:16, name:'MacBook', description:'Air', price: 999, condition: "new", category: "laptop"},
];


