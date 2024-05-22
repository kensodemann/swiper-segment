import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.page.html',
  styleUrls: ['./medical.page.scss'],
})
export class MedicalPage implements OnInit {
  @ViewChild('swiper')
  public swiperModules = [IonicSlides];
  public hasSlideChanged = 0;
  public selectedTab = 0;
  public tabList = [
    {
      id: 'slide1',
      text: 'slide 1',
      index: 0,
    },
    {
      id: 'slide2',
      text: 'slide 2',
      index: 1,
    },
    {
      id: 'slide3',
      text: 'slide 3',
      index: 2,
    },
    {
      id: 'slide4',
      text: 'slide 4',
      index: 3,
    },
    {
      id: 'slide5',
      text: 'slide 5',
      index: 4,
    },
  ];
  private swiperInstance: any;
  public selectedSegmentInfo: any;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
  ) {}

  @ViewChild('swiper')
  set swiper(swiperRef: ElementRef) {
    /**
     * This setTimeout waits for Ionic's async initialization to complete.
     * Otherwise, an outdated swiper reference will be used.
     */
    setTimeout(() => {
      this.swiperInstance = swiperRef.nativeElement.swiper;
      this.swiperInstance.params.initialSlide = 0;
      this.swiperInstance.params.speed = 400;
      this.swiperInstance.params.updateOnWindowResize = true;
      this.swiperInstance.params.observer = true;
      this.swiperInstance.params.observeParents = true;
      this.swiperInstance.params.observeSlideChildren = true;
      this.swiperInstance.params.touchAngle = 30;
    }, 0);
  }

  ngOnInit() {
    this.selectedSegmentInfo = this.tabList[0];
    this.selectedTab = 0;
  }

  segmentChange(event: any) {
    let value = event.detail.value;
    if (value) {
      value = value.toString();
    }
    if (value !== String(2)) {
      this.swiperInstance?.slideTo(event.detail.value);
      this.selectedSegmentInfo = this.tabList.find((t) => t.index.toString() === value);
      this.updateSegmentChange();
    }
  }

  updateSegmentChange() {
    if (this.selectedSegmentInfo) {
      const selectedSegment = this.elementRef.nativeElement.querySelector('#' + this.selectedSegmentInfo.id);
      selectedSegment.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  slideChange() {
    // const index = this.swiperInstance?.activeIndex;
    // this.segmentChange({ detail: { value: index } });
    // if (index !== 2) {
    //   this.selectedTab = index;
    // } else {
    //   this.swiperInstance?.slidePrev();
    // }
    // this.zone.run(() => {
    //   this.hasSlideChanged = 1;
    // });
  }

  slideChangeCompleted() {
    // this.zone.run(() => {
    //   this.hasSlideChanged = 2;
    // });
  }
}
