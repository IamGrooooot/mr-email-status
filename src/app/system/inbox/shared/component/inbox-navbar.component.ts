import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'mr-inbox-navbar',
  templateUrl: './inbox-navbar.component.html',
  styleUrls: ['./inbox-navbar.component.sass']
})
export class InboxNavbarComponent implements OnInit{

  @Input() choiseMessage: boolean = false;
  constructor() { }

  ngOnInit() {
  }
}