import { Component, OnInit } from "@angular/core";
import { IChoiseMessage } from "./shared/interface/choise-message.interface";
import { IMessageInboxActive } from "./shared/interface/message.interface";
import { IPagination } from "./shared/interface/pagination.interface";
import { ActivatedRoute } from "@angular/router";
import { IPage } from "./shared/interface/page.interface";

@Component({
  selector: 'mr-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass']
})
export class SystemComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {}
  message: IMessageInboxActive[] = [
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 1,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 2,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 3,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 4,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 5,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 6,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 7,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 8,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 9,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 10,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 11,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 12,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 13,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 14,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 15,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 16,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 17,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 18,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 19,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 20,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 21,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 22,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 23,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 24,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 25,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 26,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 27,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 28,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 29,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 30,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 31,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 32,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 33,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 34,
    },
    {
      checkbox: false,
      new: false,
      from: "ГУ Банка России",
      email: "test1@gmail.com",
      recipient: "Мид РФ (здание рядом)",
      received: new Date().toLocaleDateString(),
      topic: "Встреча представителей Банка России",
      pass: "E-mail",
      whom: "Сидорову К.О",
      doc_num: "КР-13/2344 jn 12.05.2018",
      viewed: ["Сергеева И.М.", "Круглова Н.С."],
      isn: 35,
    },
    {
      checkbox: false,
      new: true,
      from: "Общество кого-то там РФ",
      email: "test2@gmail.com",
      recipient: "Мид РФ",
      received: new Date().toLocaleDateString(),
      topic: "Об утверждении проекта закона о перелетах лиц с ОВЗ",
      pass: "E-mail",
      whom: "Петрову В.А.",
      doc_num: "П-1 от 16.05.2018",
      viewed: ["Сергеева И.М."],
      isn: 36,
    }
  ]

  pagination: IPagination;

  viewModel: IMessageInboxActive[] = [];

  page: IPage = {
    table: '',
    id: 1
  };

  onPageCountMessage: number = 5;

  showViewCustomization: boolean = false;

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.page.table = this.route.snapshot.params['table'];
      this.page.id = +this.route.snapshot.params['id'];

      this.pagination = {
        onPageCountMessage : this.onPageCountMessage,
        countMessage: this.message.length,
        navPagination: []
      }

      this.viewModel = [];
      for(let i = 0; i < this.onPageCountMessage; i++){
        if(this.onPageCountMessage * this.page.id - i - 1 <this.pagination.countMessage){
          this.viewModel.push(this.message[this.onPageCountMessage * this.page.id - i - 1])
        }
      }
    })
  }

  viewCustomization(customization: boolean){
    this.showViewCustomization = customization
  }

  closeViewCustomization(){
    this.showViewCustomization = false;
  }
}