import {Directive, ElementRef, inject, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appQualityImage]',
  standalone: true
})
export class QualityImageDirective implements OnInit {
  @Input() src: string = '';
  @Input() defaultQuality: 'low' | 'normal' | 'high' | 'ultra' = 'normal';

  private readonly validQualities = ['low', 'normal', 'high', 'ultra'];
  private imgElement: HTMLImageElement | null = null;
  el = inject(ElementRef);

  ngOnInit() {
    this.imgElement = this.el.nativeElement as HTMLImageElement;

    if (!this.src) return;

    let quality = localStorage.getItem('imageQuality') ?? this.defaultQuality;

    if (!this.validQualities.includes(quality)) {
      quality = 'normal';
    }

    const separator = this.src.includes('?') ? '&' : '?';
    const qualityUrl = `${this.src}${separator}quality=${quality}`;

    this.imgElement.src = qualityUrl;
  }
}
