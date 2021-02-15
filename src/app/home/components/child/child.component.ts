import { formatDate } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title;
  _time;

  @ViewChild('timeRef',{static:true}) timeRef:ElementRef;

  public get time():number{
    console.log(this._time);
    return this._time;
  }
  public get title():string{
    console.log("脏值检测");
    return this._title;
  }
  constructor(private ngZone:NgZone,private rd2:Renderer2) {
    this._title="hello";
   }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    //不能在脏值检测中对绑定变量重新赋值
    // this._title = "23";
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this._title="nihao";
        this.rd2.setProperty(this.timeRef.nativeElement,
          'innerText',
          Date.now()
        );
        
      },100);
    });
  }
  handleClickViewCheck(){

  }
}
