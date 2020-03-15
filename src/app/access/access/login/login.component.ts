import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from './../../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public renderRegister: EventEmitter<string> = new EventEmitter();
  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servRegister: RegisterService
  ) {
    this.buildMyForm();
   }

  ngOnInit() {
  }

  render() {
    this.renderRegister.emit('REGISTER');
  }

  public logar(): void {
    this.servRegister.autentication(this.formLogin.controls.email.value, this.formLogin.controls.password.value);
  }

  private buildMyForm(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

}
