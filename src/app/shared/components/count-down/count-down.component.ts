import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;
  constructor() { }

  @Input() startDate: Date = new Date();
  @Input() dueDate: Date ;

  

  private dateDiff=(start:Date,end:Date)=>{
    return Math.floor((end.getTime() - start.getTime())/this._MS_PER_SECOND);
  }

  private getCountDown(startDate:Date,dueDate:Date){
    return interval(1000).pipe(
      map(elapse=> this.dateDiff(startDate,dueDate)-elapse),
      takeWhile(gap => gap>0 ),
      tap(gap=>console.log(`gap:${gap}`)),
      map(gap=>{
        return {
          day: Math.floor(gap/3600/24),
          hour: Math.floor(gap/3600%24),
          minute: Math.floor(gap/60%60),
          second: Math.floor(gap%60)
        }
      }),
      map(({day,hour,minute,second})=>`${day}:${hour}:${minute}:${second}`),
      tap(gap=>console.log(`gap:${gap}`)),
    );
  }
  ngOnInit() {
    this.countDown$= this.getCountDown(this.startDate,this.dueDate);
    
  }

}
