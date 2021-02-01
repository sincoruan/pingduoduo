import { Component, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, TopMenu } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernameParent='';
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;
  scrollableTabBgColor = 'red';
  menus: TopMenu[] =[{
    title: '热门',
    link: ''
  },
  {
    title: '男装',
    link: ''
  },
  {
    title: '百货',
    link: ''
  },
  {
    title: '运动',
    link: ''
  },
  {
    title: '手机',
    link: ''
  },
  {
    title: '家纺',
    link: ''
  },
  {
    title: '食品',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '鞋包',
    link: ''
  },
  {
    title: '汽车',
    link: ''
  },
  {
    title: '水果',
    link: ''
  },
  {
    title: '电脑',
    link: ''
  },
  {
    title: '内衣',
    link: ''
  },
  {
    title: '家装',
    link: ''
  },
  {
    title: '母婴',
    link: ''
  },
  {
    title: '美妆',
    link: ''
  },
  {
    title: '家具',
    link: ''
  }] ;
  imageSliders:ImageSlider[]=[
    {
      imgUrl:"https://i.pinimg.com/originals/d7/be/2a/d7be2a0cc36277ba0d5fcb3b325389a5.jpg",
      link:"",
      caption:""
    },
    {
      imgUrl:"https://previews.123rf.com/images/reamonn/reamonn1706/reamonn170600009/80945029-beautiful-girl-in-a-red-dress-sochi-city.jpg",
      link:"",
      caption:""
    },
    {
      imgUrl:"https://i.pinimg.com/originals/20/d9/6d/20d96db773e87a340b8d52140310784b.jpg",
      link:"",
      caption:""
    }
  ];

  handleTabSelected(menu:TopMenu){
    const colors=['red','blue','black'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = colors[idx];
    // console.log(menu);
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(this.imgSlider);
  }
}
