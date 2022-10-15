import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]',
})
export class FocusBackDirective implements OnInit, OnDestroy {
  private lastFocusabledElement: Element;
  constructor() {}

  ngOnInit(): void {
    this.lastFocusabledElement = document.activeElement;
  }
  ngOnDestroy(): void {
    (this.lastFocusabledElement as HTMLElement).focus();
  }
}
