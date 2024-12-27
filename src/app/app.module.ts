import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    ProductComponent,
    HttpClientModule,
    FormsModule,
    CreateProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
