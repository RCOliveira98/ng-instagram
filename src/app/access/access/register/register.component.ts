import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() renderLogin: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  render() {
    this.renderLogin.emit('LOGIN');
  }

}
