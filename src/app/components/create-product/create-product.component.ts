import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
//import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
  }

  submit() {
    // this.productService.create({
    //     title: this.form.value.title as string,
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //     category: 'electronic',
    //     rating: {
    //       rate: 4,
    //       count: 1
    //     }
    // }).subscribe(() => {
    //   this.modalService.close()
    // })
  }
}
