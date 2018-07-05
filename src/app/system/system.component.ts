import { Component } from "@angular/core";
import { IChoiseMessage } from "./shared/interface/choise-message.interface";

@Component({
  selector: 'mr-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass']
})
export class SystemComponent {

  showViewCustomization: boolean = false;
  choisedMessage: IChoiseMessage = {
    isn: '0',
    choise: false,
    visible_button: false
  };

  choiseMessage(choiseMessage: IChoiseMessage){
    this.choisedMessage = choiseMessage;
    console.log(this.choisedMessage);
  }

  viewCustomization(customization: boolean){
    this.showViewCustomization = customization
  }

  closeViewCustomization(){
    this.showViewCustomization = false;
  }
}