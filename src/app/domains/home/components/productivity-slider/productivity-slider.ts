import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

register();

@Component({
  selector: 'home-component-productivity-slider',
  imports: [CommonModule],
  templateUrl: './productivity-slider.html',
  styleUrl: './productivity-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductivitySlider implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef?: ElementRef;
  swiper: Swiper | undefined;
  currentSlide: number = 0;

  ngAfterViewInit(): void {
    if (this.swiperRef?.nativeElement) {
      this.swiper = this.swiperRef.nativeElement.swiper as Swiper;
    }
  }

  onSlideChange(event: any) {
    const detail = event.detail[0] as Swiper;
    this.currentSlide = detail.activeIndex ?? 0;
  }

  get activeCard(): string {
    return 'shadow-xl !rounded-lg border-l-8 border-blue-400';
  }

  goToSlide(slide: number) {
    if (!this.swiper) {
      return;
    }
    this.currentSlide = slide;
    this.swiper.slideTo(slide);
  }
}
