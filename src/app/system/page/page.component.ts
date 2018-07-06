import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPage } from '../shared/interface/page.interface';
import { IMessageInboxActive } from '../shared/interface/message.interfase';
import { IChoiseMessage } from '../shared/interface/choise-message.interface';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../shared/services/email.services';

@Component({
  selector: 'mr-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  @Output() choisedMessage = new EventEmitter<IChoiseMessage>();

  
  
  // База для тестирования
  message: IMessageInboxActive[] = [
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 1,
      active: true
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Сергеева И.М."],
      isn: 2,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 3,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: [],
      isn: 4,
      active: true
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: [],
      isn: 5,
      active: true
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С."],
      isn: 6,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С."],
      isn: 7,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 8,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С."],
      isn: 9,
      active: true
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С."],
      isn: 10,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 11,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 12,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 13,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 14,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 15,
      active: false
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nesciunt at dolores iusto ipsa labore voluptates! Culpa et nemo nostrum facilis ullam blanditiis dolores corporis cum tempora impedit, voluptate magnam, a ad? Aspernatur quo odio voluptatibus, similique voluptate quaerat alias",
      received: new Date().toLocaleDateString(),
      correspondent: "Министерство Экономики Республики Беларусь",
      delivery: "E-mail",
      viewed: ["Круглова Н.С.", "Сергеева И.М."],
      isn: 16,
      active: false
    }
  ]

  // Работа с ID
  id: string;

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
      this.id = this.route.snapshot.params['page'];
      this.page = this.json[this.id][0];
      this.page.message = this.message;
      console.log(this.page);
    })
  }

  someClick(isn){
    this.choiseMessage = {
      isn: isn,
      choise: true,
      visible_button: this.id === "inbox-active" ? true : false
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
