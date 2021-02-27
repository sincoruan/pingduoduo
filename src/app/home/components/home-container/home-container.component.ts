import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TopMenu } from 'src/app/shared/components';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  
  scrollableTabBgColor = 'red';
  menus$: Observable<TopMenu[]>;

  usernameParent='';


  handleTabSelected(menu:TopMenu){
    this.router.navigate(['home',menu.link]);
  }

  constructor(private router: Router,private service:HomeService,@Inject(token) private baseUrl :String) { }

  ngOnInit() {
    this.menus$ = this.service.getTabs();
    console.log(this.baseUrl);
  }

}
