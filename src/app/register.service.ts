import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as sdkFirebase from 'firebase';

import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private servRouter: Router) { }

  register(user: User): void {
    try {
      sdkFirebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(success => {
        delete user.password;

        sdkFirebase.database().ref(`details_user/${btoa(user.email)}`).set(user)
        .then(register => {
          console.log('user cadastro com sucesso! ' + register);
        })
        .catch(eReegister => console.error(`Falha oa cadastrar: ${eReegister}`))
      })
      .catch(e => console.error(e));
    } catch (error) {
      console.error(`Erro register: ${error}`);
    }
  }

  autentication(email: string, pwd: string): Promise<any> {
    return sdkFirebase.auth().signInWithEmailAndPassword(email, pwd);
  }

  setToken(): void {
    sdkFirebase.auth().currentUser.getIdToken()
    .then((token: string) => sessionStorage.setItem('token', token))
    .catch(error => console.error(`setToken: ${error}`));
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  exit() {
    sdkFirebase.auth().signOut()
    .then(s => {
      sessionStorage.removeItem('token');
      this.servRouter.navigate(['']);
    })
    .catch(e => {
      console.error(`exit: ${e}`);
      alert('Falha ao encerrar sessão!');
    });
  }

  verifyToken(): boolean {
    const isToken = this.getToken();
    console.log(isToken);
    return isToken !== undefined && isToken !== null;
  }
}
