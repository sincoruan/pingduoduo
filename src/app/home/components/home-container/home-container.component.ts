import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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

  selectedTabLink$: Observable<string>;

  usernameParent='';


  handleTabSelected(menu:TopMenu){
    this.router.navigate(['home',menu.link]);
  }

  constructor(private router: Router,private service:HomeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.menus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    );
  }
}
