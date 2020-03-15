import { Injectable } from '@angular/core';

import * as sdkFirebase from 'firebase';

import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

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
}
