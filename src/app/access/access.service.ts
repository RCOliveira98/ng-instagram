import { Injectable } from '@angular/core';

import { ImageBanner } from '../shared/image-banner.model';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  /**
   * Retorna as imagens disponíveis para elementos do tipo ImageBanner
   *
   * @returns {ImageBanner[]} array de objetos ImageBanner
   * @memberof AccessService
   */
  selectFromOImgsToBanner(): ImageBanner[] {
    return [
      {state: 'init', url: '../../assets/banner-acesso/imagens/img_1.png'},
      {state: 'end', url: '../../assets/banner-acesso/imagens/img_2.png'},
      {state: 'end', url: '.../../assets/banner-acesso/imagens/img_3.png'},
      {state: 'end', url: '.../../assets/banner-acesso/imagens/img_4.png'},
      {state: 'end', url: '.../../assets/banner-acesso/imagens/img_5.png'}
    ];
  }
}
