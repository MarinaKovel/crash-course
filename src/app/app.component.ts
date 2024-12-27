import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular course'
  loading = false
  products$: Observable<IProduct[]>
  
  constructor(
    public productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll()
    .pipe(
      tap(() => this.loading = false)
    )
  }
}
