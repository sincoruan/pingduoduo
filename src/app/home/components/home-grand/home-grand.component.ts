import { Component, Injectable, Injector, OnInit } from '@angular/core';
//@Injectable()
class Product{
  //一个声明干了两件事：1>添加了成员变量 2>构造函数增加了这个参数
  constructor(private name:string ){

  }
}
class PurchaseOrder{
  private product:Product;
  private count:number;
  constructor(product:Product){
    this.product = product;
  }
}
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
    this.price = 1234.5678;
    const injector = Injector.create({
      providers:[
        {
          provide: Product,
          useFactory:()=>{
            return new Product('大米手机')
          },
          useClass: Product,
          deps:[]
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps:[Product]
        }
      ]
    });
    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    
  }

  minusDays(date:Date,days:number){
    const result = new Date(date);
    result.setDate(result.getDate()-days)
    return result;
  }
}
