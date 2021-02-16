import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedTabLink
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.selectedTabLink = params.get('tabLink')
      console.log(this.selectedTabLink);
      this.cd.markForCheck();
    });
    this.channels=this.homeService.getChannels();
    this.imageSliders = this.homeService.getImageSliders();

  }
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;

  channels: Channel[] =[];
  imageSliders:ImageSlider[]=[];

}
