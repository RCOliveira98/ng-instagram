import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { PublicationsService } from './../../publications.service';

import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {

  public iconInsta = faCamera;
  public formNewPublication: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)])
  });
  constructor(
    private servPublication: PublicationsService
  ) { }

  ngOnInit() {
  }

  public publication() {
    try {
      this.servPublication.savePublication(this.formNewPublication.controls.title.value)
      .then(success => {
        console.log(success);
        alert('Elemento publicado!');
      })
      .catch(e => {
        console.error(`publication: ${e}`);
        alert('Erro ao publicar!:(');
      });
    } catch (error) {
      console.error(`Try-catch: ${error}`);
    }
  }

}
