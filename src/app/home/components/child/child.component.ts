import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title;
  public get title():string{
    console.log("脏值检测");
    return this._title;
  }
  constructor() {
    this._title="hello"
   }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    //不能在脏值检测中对绑定变量重新赋值
    this._title = "23";
  }

}
