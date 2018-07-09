import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITable } from '../shared/interface/table.interface';
import { IMessageInboxActive } from '../shared/interface/message.interface';
import { IChoiseMessage } from '../shared/interface/choise-message.interface';
import { IPage } from '../shared/interface/page.interface';

@Component({
  selector: 'mr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() _message: IMessageInboxActive[];
  @Input() page: IPage;
  @Output() choisedMessage = new EventEmitter<IChoiseMessage>();

  message: IMessageInboxActive[];

  // Загрузка настройки страницы из json
  table: ITable;
  json = require('../shared/consts/page.json');

  // Отображение кнопок в Panel
  choiseMessage: IChoiseMessage = {
    isn: '0',
    choise: false,
    visible_button: false
  };

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.message = this._message;
      this.table = this.json[this.page.table][0];
      this.table.message = this.message;
    })
  }

  someClick(isn){
    this.choiseMessage = {
      isn: isn,
      choise: true,
      visible_button: this.page.table === "inbox-active" ? true : false
    }
    this.choisedMessage.emit(this.choiseMessage);
  }

  // Отображение массива в столбцах
  isArray(o: any): boolean{
    if (o instanceof Array)
      return true;
    return false;
  }
}
