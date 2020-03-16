import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AccessModule } from './access/access.module';
import { PostsModule } from './posts/posts.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SentinelaGuard } from './sentinela.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccessModule,
    PostsModule
  ],
  providers: [SentinelaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
