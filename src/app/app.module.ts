import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { AppComponent } from './app.component';
//import { MyProduct } from './productDetails';

@NgModule({
  declarations: [
    AppComponent,
    //MyProduct
  ],
  imports: [
    BrowserModule,
    FormsModule // import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
