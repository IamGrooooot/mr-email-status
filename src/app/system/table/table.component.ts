import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITable } from '../shared/interface/table.interface';
import { IMessageInboxActive } from '../shared/interface/message.interface';
import { IChoiseMessage } from '../shared/interface/choise-message.interface';
import { IPage } from '../shared/interface/page.interface';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'mr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() _message: IMessageInboxActive[];
  @Input() page: IPage;

  message: IMessageInboxActive[];

  // Загрузка настройки страницы из json
  table: ITable;
  json = require('../shared/consts/page.json');

  // Отображение кнопок в Panel
  choiseMessage: IChoiseMessage;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.table = this.json[this.page.table][0];
    this.route.params.subscribe(params => {
      this.message = this._message;
      this.someClick(this.message[0].isn);
    });
  }

  someClick(isn: number){
    this.choiseMessage = {
      isn: isn,
      choise: true,
      visible_button: this.page.table === "inbox-active" ? true : false
    }
    console.log(this.choiseMessage);
    console.log(this.message);

  }

  // Отображение массива в столбцах
  isArray(o: any): boolean{
    if (o instanceof Array)
      return true;
    return false;
  }
}
