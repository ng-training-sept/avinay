import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appSpecial]',
  standalone: true
})
export class SpecialDirective {

  private readonly el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter(): void {
    this.applySpecialColor('deeppink');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.applySpecialColor('');
  }

  private applySpecialColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
