import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from '../../../register.service';

import { User } from './../../../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() renderLogin: EventEmitter<string> = new EventEmitter();
  public formRegister: FormGroup;
  private user: User;

  constructor(
    private formBuilder: FormBuilder,
    private servRegister: RegisterService
    ) {
      this.buildForm();
     }

  ngOnInit() {
  }

  public render() {
    this.renderLogin.emit('LOGIN');
  }

  public newUser() {
    try {
      this.createUser();
      this.servRegister.register(this.user);
      console.log(this.formRegister);
      this.render();
    } catch (error) {
      console.error(`newUser: ${error}`);
    }
  }

  private createUser(): void {
    try {
      this.user = new User();
      this.user.name = this.formRegister.controls.name.value;
      this.user.nameUser = this.formRegister.controls.nameUser.value;
      this.user.password = this.formRegister.controls.password.value;
      this.user.email = this.formRegister.controls.email.value;
    } catch (error) {
      console.error(`createUser: ${error}`);
    }
  }

  private buildForm() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      nameUser: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

}
