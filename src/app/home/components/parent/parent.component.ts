import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('inputRef',{static:true}) inputRef:ElementRef;
  constructor() { }

  startDate:Date = new Date(2021,2,27);
  endDate:Date = new Date(2021,2,28);
  ngOnInit() {
    fromEvent(this.inputRef.nativeElement,'input')
    .subscribe(
      (ev:any) => 
      console.log(ev.target.value) 
      ) ;
    console.log("hello");
  }

}
