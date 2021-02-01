import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective { 
    @Input() imageSize = '2rem';
    @Input() fitMode = 'cover';
    
    constructor(private elr:ElementRef,private rd2:Renderer2){
    }
    ngOnInit(): void {
        this.setStyle('grid-area','image');
        this.setStyle('width',this.imageSize);
        this.setStyle('height',this.imageSize);
        this.setStyle('object-fit',this.fitMode);        
    }
    private setStyle(styleName:string,styleValue:string){
        this.rd2.setStyle(this.elr.nativeElement,styleName,styleValue);
    }
    @HostListener('click', ['$event.target'])
    handleClick(ev){
        console.log(ev);
    }
}
