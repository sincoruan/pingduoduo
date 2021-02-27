import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared/components';
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
  selectedTabLink$ : Observable<String>;

  ngOnInit() {

    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    );

    this.channels$ = this.homeService.getChannels();
    this.imageSliders$ = this.homeService.getBanners();
  }
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;

  channels$ : Observable<Channel[]>;
  imageSliders$:Observable<ImageSlider[]>;

}
