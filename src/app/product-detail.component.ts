import { Component, Input} from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'product-detail',
    template: `
        <div *ngIf = "product">
            <h2>Details about the {{product.name}}</h2>

            <div class = "d">
                <label>id: </label>{{product.id}}
            </div>
            <div class = "d">
                <label>name: </label>{{product.name}}
            </div>
            <div class = "d">
                <label>description: </label>{{product.description}}
            </div>
            <div class = "d">
                <label>price: </label>{{product.price}}
            </div>
            <div class = "d">
                <label>condition: </label>{{product.condition}}
            </div>
            <div class = "d">
                <label>category: </label>{{product.category}}
            </div>
            <br>

            <div class = "input">
                <label>name: </label>
                <input [(ngModel)] ="product.name" placeholder="name">
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
    `]
})

export class ProductDetailComponent{
    @Input()  //<-- declare that product is an input property 
    product: Product;  
}
