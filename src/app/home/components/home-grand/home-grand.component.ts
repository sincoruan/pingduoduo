import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = {productId:2,productName:"phone",type:"小米"};
  date:Date;
  price:number;
  data= "12345"
  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(),1);
    this.price = 1234.5678
  }

  minusDays(date:Date,days:number){
    const result = new Date(date);
    result.setDate(result.getDate()-days)
    return result;
  }
}
