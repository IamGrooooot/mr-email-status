import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SomeService } from '../../services/some.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IChoiseMessage } from '../../interface/choise-message.interface';

@Component({
  selector: 'mr-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {

  @Input() choiseMessage: IChoiseMessage;
  @Output() customization = new EventEmitter<boolean>();

  viewCustomization: boolean = false;
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
    ///this.dangerousUrl = 'javascript:reg(' + this.gButton.isn + ')';
    this.dangerousUrl = 'https://github.com/IamGrooooot';
    this.trustedUrl = this.normalUrl.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  reverseButton(){
    this.choiseMessage = {
      isn: '0',
      choise: false,
      visible_button: false
    }
  }

  showViewCustomization(){
    this.viewCustomization = true;
    this.customization.emit(this.viewCustomization);
  }

}
