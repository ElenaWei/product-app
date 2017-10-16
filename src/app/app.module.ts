import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // import the FormsModule before binding with [(ngModel)]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
