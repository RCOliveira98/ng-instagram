import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() renderRegister: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  render() {
    this.renderRegister.emit('REGISTER');
  }

}
