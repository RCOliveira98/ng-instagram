import { Component, OnInit } from '@angular/core';

import { RegisterService } from './../../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private servRegister: RegisterService
  ) { }

  ngOnInit() {
  }

  exit() {
    this.servRegister.exit();
  }

}
