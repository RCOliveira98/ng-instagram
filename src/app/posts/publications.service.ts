import { Injectable } from '@angular/core';

import * as sdkFirebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private userCurrent;

  constructor() {
    sdkFirebase.auth().onAuthStateChanged(
      user => {
        this.userCurrent = user;
      }
    );
   }

  savePublication(publication: any): Promise<any> {
    return sdkFirebase.database().ref(`publications/${btoa(this.userCurrent.email)}`).push(publication);
  }
}
