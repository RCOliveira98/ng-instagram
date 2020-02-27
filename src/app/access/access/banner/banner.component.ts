import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { AccessService } from './../../access.service';

import { ImageBanner } from '../../../shared/image-banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bannerAnimation', [
      state('init', style({
        opacity: 1
      })),
      state('end', style({
        opacity: 0
      })),
      transition('init <=> end', animate('1s'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  listImages: ImageBanner[] = [];

  constructor(private servAccess: AccessService) { }

  ngOnInit() {
    this.loadImages();
    setTimeout(() => this.rotation(), 3000);
  }

  rotation() {
    let nextId: number;

    for (let i = 0; i < this.sizeLoop(); i++) {
      if (this.listImages[i].state === 'init') {
        nextId = i < (this.sizeLoop() - 1) ? i + 1 : 0;

        this.listImages[i].state = 'end';
        break;
      }
    }

    this.listImages[nextId].state = 'init';

    setTimeout(() => this.rotation(), 3000);
  }

  /**
   * Atribui elementos a variável listImages através do AccessService
   *
   * @private
   * @memberof BannerComponent
   */
  private loadImages() {
    this.listImages = this.servAccess.selectFromOImgsToBanner();
  }

  private sizeLoop(): number {
    return this.listImages.length;
  }

}
