﻿import {AfterViewInit, Directive, ElementRef, inject, InjectionToken, Input} from '@angular/core';

export const TruncateLimit = new InjectionToken<number>('TruncateLimit');

@Directive({
  selector: '[appTruncate]',
  standalone: true,
})
export class TruncateDirective implements AfterViewInit {
  @Input() limit = inject(TruncateLimit, {optional: true}) ?? 80;
  private readonly elRef = inject(ElementRef);

  ngAfterViewInit() {
    this.elRef.nativeElement.TextContent =
      this.elRef.nativeElement.textContent.slice(
        0,
        this.limit,
      );
  }
}
