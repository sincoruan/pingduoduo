import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { Ad } from 'src/app/shared/domain';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private homeService:HomeService,private cd:ChangeDetectorRef) { 

  }
  //编码习惯，加了$表明它是一个流
  selectedTabLink$ : Observable<string>;
  ad$: Observable<Ad>;
  
  ngOnInit() {

    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    );

    this.channels$ = this.homeService.getChannels();
    this.imageSliders$ = this.homeService.getBanners();
    //流的重用
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.homeService.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
  }
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;

  channels$ : Observable<Channel[]>;
  imageSliders$:Observable<ImageSlider[]>;

}
