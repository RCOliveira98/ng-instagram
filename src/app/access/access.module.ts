import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { AccessRoutingModule } from './access-routing.module';

import { RegisterService } from '../register.service';
import { AccessService } from './access.service';

import { AccessComponent } from './access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';

@NgModule({
  declarations: [
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccessService, RegisterService],
  exports: [AccessComponent]
})
export class AccessModule { }
