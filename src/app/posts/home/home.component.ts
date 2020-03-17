import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './../../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private servRegister: RegisterService,
    private servRouter: Router
  ) { }

  ngOnInit() {
  }

  exit() {
    this.servRegister.exit();
    this.servRouter.navigate(['']);
  }

}
