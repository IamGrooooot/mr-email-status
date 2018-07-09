import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPage } from '../shared/interface/page.interface';
import { IMessageInboxActive } from '../shared/interface/message.interfase';
import { IChoiseMessage } from '../shared/interface/choise-message.interface';

@Component({
  selector: 'mr-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  @Input() message: IMessageInboxActive[];
  @Output() choisedMessage = new EventEmitter<IChoiseMessage>();

  // База для тестирования

  // Работа с ID
  pageId: string;
  pageName: string;

  // Загрузка настройки страницы из json
  page: IPage;
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
      this.pageId = this.route.snapshot.params['page'];
      this.page = this.json[this.pageId][0];
      this.page.message = this.message;
      console.log(this.page);
    })
  }

  someClick(isn){
    this.choiseMessage = {
      isn: isn,
      choise: true,
      visible_button: this.pageId === "inbox-active" ? true : false
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
