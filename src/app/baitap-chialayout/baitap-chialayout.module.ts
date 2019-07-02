import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapChialayoutComponent } from './baitap-chialayout.component';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapCarouselComponent } from './baitap-carousel/baitap-carousel.component';
import { BaitapSmartphoneComponent } from './baitap-smartphone/baitap-smartphone.component';
import { BaitapLaptopComponent } from './baitap-laptop/baitap-laptop.component';
import { BaitapPromotionComponent } from './baitap-promotion/baitap-promotion.component';
import { BaitapProductitemComponent } from './baitap-productitem/baitap-productitem.component';

@NgModule({
  declarations: [BaitapChialayoutComponent, BaitapHeaderComponent, BaitapCarouselComponent, BaitapSmartphoneComponent, BaitapLaptopComponent, BaitapPromotionComponent, BaitapProductitemComponent],
  exports: [BaitapChialayoutComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapChialayoutModule { }
