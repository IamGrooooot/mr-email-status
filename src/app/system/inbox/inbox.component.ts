import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChoiseMessage } from './shared/models/choise-message.model';

@Component({
  selector: 'mr-inbox',
  templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

  @Output() choiseMessage = new EventEmitter<ChoiseMessage>();
  constructor() { }

  ngOnInit() {
  }

  onChanged(choiseEmail: ChoiseMessage){
    this.choiseMessage.emit(choiseEmail);
    console.log(choiseEmail);
    
  }
}
