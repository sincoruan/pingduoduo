import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective { 
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') place = 'center';
    @HostBinding('style.width') width = '4rem';
}