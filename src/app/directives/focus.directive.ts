import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: false
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    // this.el.nativeElement.focus()
  }
  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}