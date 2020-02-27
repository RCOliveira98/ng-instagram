import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccessRoutingModule } from './access-routing.module';

import { AccessService } from './access.service';

import { AccessComponent } from './access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';

@NgModule({
  declarations: [AccessComponent, BannerComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AccessService],
  exports: [AccessComponent]
})
export class AccessModule { }
