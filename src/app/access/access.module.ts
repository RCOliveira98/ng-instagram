import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';

@NgModule({
  declarations: [AccessComponent, BannerComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccessRoutingModule
  ],
  exports: [AccessComponent]
})
export class AccessModule { }
