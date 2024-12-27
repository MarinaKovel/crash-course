import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  standalone: false,
  
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  title = 'Angular course'
  loading = false
  term = ''
  
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
