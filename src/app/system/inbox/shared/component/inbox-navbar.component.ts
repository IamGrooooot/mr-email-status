import { Component, OnInit, Input } from "@angular/core";
import { ChoiseMessage } from "../models/choise-message.model";

@Component({
  selector: 'mr-inbox-navbar',
  templateUrl: './inbox-navbar.component.html',
  styleUrls: ['./inbox-navbar.component.sass']
})
export class InboxNavbarComponent implements OnInit{

  @Input() choiseMes: any;
  constructor() { }

  ngOnInit() {
  }
}