import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  tabItems: TabItem[]=[
    {
      title:'聊天',
      icon:'/assets/tabs/recommend.png',
      link:'recommend',
      selectedIcon:'/assets/tabs/recommend_selected.png'
    },
    {
      title:'聊天',
      icon:'/assets/tabs/category.png',
      link:'category',
      selectedIcon:'/assets/tabs/category_selected.png'
    },
    {
      title:'聊天',
      icon:'/assets/tabs/chat.png',
      link:'chat',
      selectedIcon:'/assets/tabs/chat_selected.png'
    },
    {
      title:'聊天',
      icon:'/assets/tabs/my.png',
      link:'my',
      selectedIcon:'/assets/tabs/my_selected.png'
    }
  ];
  @Input() selectedIndex=0;
  @Output() tabSelected= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleSelectedTab(index:number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.tabItems[index]);
  }
}
