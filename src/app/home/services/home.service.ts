import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared/components';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
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
    getTabs(){
        return this.menus;
    }
    channels: Channel[] =[
    {
    id:1,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount1',
    link:'hot'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    },
    {
    id:2,
    icon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
    title:'discount2',
    link:'hot2'
    }
    ];
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
    getChannels(){
        return this.channels;
    }
    getImageSliders(){
        return this.imageSliders;
    }
}