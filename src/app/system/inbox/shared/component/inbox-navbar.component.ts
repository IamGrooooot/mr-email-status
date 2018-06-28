import { Component, OnInit, Input } from "@angular/core";
import { SomeService } from "../../../shared/services/some.service";
import { ChoiseMessage } from "../models/choise-message.model";
import { DomSanitizer } from "@angular/platform-browser";

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

  normalUrl: any;
  trustedUrl: any;
  dangerousUrl: any;

  constructor(
    private someService: SomeService,
    private domSanitizer: DomSanitizer
  ) {
    this.normalUrl = domSanitizer;
  }

  ngOnInit() {
    this.someService.events$.forEach((event) => {
      this.gButton = event;
      //this.dangerousUrl = 'javascript:reg(' + this.gButton.isn + ')';
      this.dangerousUrl = 'https://github.com/IamGrooooot';
      this.trustedUrl = this.normalUrl.bypassSecurityTrustUrl(this.dangerousUrl);
    });
  }
}