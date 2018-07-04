import { Component } from "@angular/core";
import { IChoiseMessage } from "./shared/interface/choise-message.interface";

@Component({
  selector: 'mr-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {

  choisedMessage: IChoiseMessage = {
    isn: '0',
    choise: false,
    visible_button: false
  };

  choiseMessage(choiseMessage: IChoiseMessage){
    this.choisedMessage = choiseMessage;
    console.log(this.choisedMessage);
  }
}