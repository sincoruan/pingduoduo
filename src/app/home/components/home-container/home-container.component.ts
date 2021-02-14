import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  scrollableTabBgColor = 'red';
  menus: TopMenu[] =[{
    id:1,
    title: '热门',
    link: 'hot'
  },
  {
    id:2,
    title: '男装',
    link: 'men'
  },
  {
    id:3,
    title: '百货',
    link: 'grocery'
  },
  {
    id:4,
    title: '运动',
    link: 'sports'
  },
  {
    id:5,
    title: '手机',
    link: 'phone'
  },
  {
    id:6,
    title: '家纺',
    link: 'home'
  },
  {
    id:7,
    title: '食品',
    link: 'food'
  },
  {
    id:8,
    title: '电器',
    link: 'electric'
  },
  {
    id:9,
    title: '鞋包',
    link: 'shoes'
  },
  {
    id:10,
    title: '汽车',
    link: 'car'
  },
  {
    id:11,
    title: '水果',
    link: 'fruit'
  },
  {
    id:12,
    title: '电脑',
    link: 'computer'
  },
  {
    id:13,
    title: '内衣',
    link: 'underwear'
  },
  {
    id:14,
    title: '家装',
    link: 'housedecoration'
  },
  {
    id:15,
    title: '母婴',
    link: 'infant'
  },
  {
    id:16,
    title: '美妆',
    link: 'makeup'
  },
  {
    id:17,
    title: '家具',
    link: 'furniture'
  }] ;

  usernameParent='';


  handleTabSelected(menu:TopMenu){
    this.router.navigate(['home',menu.link]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
