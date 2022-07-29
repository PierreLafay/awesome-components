import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef,
              private renderer: Renderer2) {}

  @Input() color = 'yellow';

  ngAfterViewInit() {
    this.setBackgroundColor(this.color);
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
