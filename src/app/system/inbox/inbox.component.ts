import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-inbox',
  templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

  @Output() choiseMessage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  onChanged(choiseEmail: any){
    this.choiseMessage.emit(choiseEmail);
  }
}
