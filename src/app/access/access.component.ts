import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  animations: [
    trigger('tgrLoadBanner', [
      state('created', style({ opacity: '1'})),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(-50px, 0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ]),
    trigger('tgrLoadBox', [
      state('created', style({ opacity: '1'})),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(50px, 0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ])
  ]
})
export class AccessComponent implements OnInit {

  stateBanner = 'created';
  stateBox = 'created';

  constructor() { }

  ngOnInit() {
  }

}
