import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 

  }
  selectedTabLink
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.selectedTabLink = params.get('tabLink')
      console.log(this.selectedTabLink);
    });
  }
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;

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
}
