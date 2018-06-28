import { Component, OnInit, Input } from "@angular/core";
import { SomeService } from "../../../shared/services/some.service";
import { ChoiseMessage } from "../models/choise-message.model";

@Component({
  selector: 'mr-inbox-navbar',
  templateUrl: './inbox-navbar.component.html',
  styleUrls: ['./inbox-navbar.component.sass']
})
export class InboxNavbarComponent implements OnInit{

  gButton: ChoiseMessage = {
    isn: "0",
    choise: false
  };

  constructor(
    private someService: SomeService
  ) { }

  ngOnInit() {
    this.someService.events$.forEach((event) => {
      console.log(event);
      this.gButton = event;
    });
  }
}