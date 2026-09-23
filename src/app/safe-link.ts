import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLink {
  querryParams = input('khaled');
  hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    // console.log('SafeLink directive initialized');
  }
  onClick(event: MouseEvent) {
    const wannaLeavePage = confirm('Are you sure you want to leave this page?');

    if (wannaLeavePage) {
      const link = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = link + '?from=' + this.querryParams();
      return;
    }
    event.preventDefault();
  }
}
