import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-inbox',
  templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

  @Output() choiseMessage = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onChanged(increased:boolean){
    this.choiseMessage.emit(increased);
  }
}
