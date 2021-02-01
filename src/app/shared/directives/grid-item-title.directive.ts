import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridTitleImage]',
})
export class GridItemTitleDirective { 
    @HostBinding('style.grid-area') gridarea = 'title';
    @HostBinding('style.font-size') @Input()appGridTitleImage = '3rem';
}