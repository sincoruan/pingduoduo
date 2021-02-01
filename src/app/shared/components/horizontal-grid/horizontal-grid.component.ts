import { Component, Input, OnInit, Output } from '@angular/core';

export interface Channel{
  id:number,
  icon:string,
  title:string,
  link:string
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {


  channels: Channel[] =[
    {
      id:1,
      icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
      title:'discount1',
      link:'hot1'
    },
    {
      id:2,
      icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
      title:'discount2',
      link:'hot2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
