import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { NewPublicationComponent } from './publications/new-publication/new-publication.component';

import { PublicationsService } from './publications.service';


@NgModule({
  declarations: [HomeComponent, PublicationsComponent, NewPublicationComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [PublicationsService]
})
export class PostsModule { }
