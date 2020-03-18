import { Component, OnInit } from '@angular/core';

import * as sdkFirebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng-instagram';
  private config = {
    apiKey: '***',
    authDomain: '***',
    databaseURL: '***',
    projectId: '***',
    storageBucket: '***',
    messagingSenderId: '***',
    appId: '***'
  };

  ngOnInit() {
    sdkFirebase.initializeApp(this.config);
  }
}
