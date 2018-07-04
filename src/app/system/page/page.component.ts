import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { update, load} from "../../../../node_modules/json-update";

import { SomeService } from '../shared/services/some.service';
import { ChoiseMessage } from '../inbox/shared/models/choise-message.model';
import { Email } from '../shared/models/email.model';
import { IPage } from '../shared/interface/page.interface';
import { IMessageInboxActive } from '../shared/interface/message.interfase';

@Component({
  selector: 'mr-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  //База для тестирования
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

  //Активация какого либо поля
  gButton: ChoiseMessage = {
    isn: "0",
    choise: false
  };

  //Разрешение для перехода по ссылке
  normalUrl: any;
  trustedUrl: any;
  dangerousUrl: any;


  //Работа с ID
  id: string;

  //Загрузка настройки страницы из json
  page: IPage;
  json = require('../shared/consts/page.json');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private someService: SomeService,
    private domSanitizer: DomSanitizer
  ) {
    this.normalUrl = domSanitizer;
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];
      this.page = this.json[this.id][0];
      this.page.message = this.message;
      console.log(this.page);
    })

    this.someService.events$.forEach((event) => {
      this.gButton = event;
      ///this.dangerousUrl = 'javascript:reg(' + this.gButton.isn + ')';
      this.dangerousUrl = 'https://github.com/IamGrooooot';
      this.trustedUrl = this.normalUrl.bypassSecurityTrustUrl(this.dangerousUrl);
    });
  }

  reverseButton(){
    this.gButton = {
      isn: "0",
      choise: false
    }
  }

  choiseMessage: ChoiseMessage = {
    isn: '0',
    choise: false
  };

  someClick(isn){
    this.choiseMessage = {
      isn: isn,
      choise: true
    }
    this.someService.newEvent(this.choiseMessage);
  }

  loadPage(){

  }
  ngAfterViewInit(){
  }
}
