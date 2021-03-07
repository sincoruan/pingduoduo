import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider{
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit,OnDestroy {

  @Input() sliders:ImageSlider[] =[];
  @Input() sliderHeight = '100px';
  @Input() intervalBySeconds:number =2;
  intervalId;
  constructor(private rd2:Renderer2) {}
  @ViewChildren('img') imgs:QueryList<ElementRef>;

  @ViewChild('imgSlider',{static:true}) imgSlider:ElementRef;
  ngOnInit() {
    //console.log('ngOnInit',this.imgSlider);
    // this.imgSlider.nativeElement.innerHTML = '<span>hello</span>'
  }
  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //console.log('ngAfterViewInit:'+this.imgs);
    this.imgs.forEach(item=>{
      this.rd2.setStyle(item.nativeElement,'height','400px');
    });
    let i=0;
    if(this.intervalBySeconds<=0) return;
    this.intervalId = setInterval(()=>{
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ( ( this.getIndex(++this.selectedIndex) ) * this.imgSlider.nativeElement.scrollWidth/this.sliders.length )
      );
    },this.intervalBySeconds * 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  getIndex(idx:number):number{
    return idx >=0 ? idx % this.sliders.length
    : this.sliders.length - Math.abs(idx)%this.sliders.length;
  }
  selectedIndex:number = 0;
  handleScroll(ev){
    const ratio 
      = ev.target.scrollLeft * this.sliders.length/this.imgSlider.nativeElement.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
  handleButtonClick(idx:number){
    this.selectedIndex=idx;
  }
}
