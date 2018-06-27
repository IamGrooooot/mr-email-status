import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Email } from '../../shared/models/email.model';
import { ChoiseMessage } from '../shared/models/choise-message.model';

@Component({
  selector: 'mr-inbox-active',
  templateUrl: './inbox-active.component.html',
  styleUrls: ['./inbox-active.component.sass']
})
export class InboxActiveComponent implements OnInit {

  @Output() onChanged = new EventEmitter<any>();

  message: Email[] = [
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

  constructor() {
  }

  ngOnInit() {
  }

  addChoiseMessage(isn: string){
    this.onChanged.emit(isn);
  }
}
