import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class SentinelaGuard implements CanActivate {

  constructor(
    private servRegister: RegisterService,
    private servRouter: Router
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.servRegister.verifyToken() ? true : this.requestAuthentication();
  }

  private requestAuthentication(): boolean {
    this.servRouter.navigate(['']);
    return false;
  }
}
