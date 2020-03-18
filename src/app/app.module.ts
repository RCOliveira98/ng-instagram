import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// meus módulos
import { AccessModule } from './access/access.module';
import { PostsModule } from './posts/posts.module';
// roteamento
import { AppRoutingModule } from './app-routing.module';
// módulos de terceiros
//
// meus componentes
import { AppComponent } from './app.component';
// meus serviços
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
