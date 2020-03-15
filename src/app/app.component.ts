import { Component, OnInit } from '@angular/core';

import * as sdkFirebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng-instagram';

  ngOnInit() {
    sdkFirebase.initializeApp({
      apiKey: 'AIzaSyBYA6qWmTsWOqn887eYH1img8bbl0fs7TM',
      authDomain: 'wtcs-1559741033931.firebaseapp.com',
      databaseURL: 'https://wtcs-1559741033931.firebaseio.com',
      projectId: 'wtcs-1559741033931',
      storageBucket: 'wtcs-1559741033931.appspot.com',
      messagingSenderId: '61475576957',
      appId: '1:61475576957:web:9ed2c7dc6649613b9a2514'
    });
  }
}
