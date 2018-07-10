import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessageInboxActive } from '../../interface/message.interface';
import { IPagination, INavPagination } from '../../interface/pagination.interface';
import { IPage } from '../../interface/page.interface';

@Component({
  selector: 'mr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input() _pagination: IPagination;
  @Input() page: IPage;

  pagination: IPagination;
  // Работа с URL
  countMessage: number;
  countNavPagination: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pagination = this._pagination;
      this.countMessage = this.pagination.countMessage;
      this.countNavPagination = Math.ceil(this.countMessage / this.pagination.onPageCountMessage);
      this.CreateNav(this.countNavPagination);
    })
  }

  private CreateNav(i: number){
    this.Clean();
    if (i < 8){
      for(let n = 1; n <= i; n++ )
      {
        this.Push(n);
      }
    }
    if (i > 7){
      this.Push("<");
      this.Push("1");

      if (this.page.id < 5){
        for(let n = 2; n < 6; n++ )
        {
          this.Push(n);
        }
        this.Push("...");
      }
      else if(i - this.page.id <= 3){
        this.Push("...");
        for(let n = i - 4; n <= i - 1; n++ )
        {
          this.Push(n);
        }
      }
      else{
        this.Push("...");
        for(let n = this.page.id - 1; n <= this.page.id + 1; n++ )
        {
          this.Push(n);
        }
        this.Push("...");
      }
      this.Push(this.countNavPagination);
      this.Push(">");
    }
  }
  
  private Push(obj: any){
    let navPagination: INavPagination = {
      Id: 0,
      Name: ''
    };

    navPagination.Name = obj.toString();
    switch(obj){
      case "<":
        navPagination.Id = this.page.id - 1;
        break;
      case ">":
        navPagination.Id = this.page.id + 1;
        break;
      case "...":
        navPagination.Id = -1;
        break;
      default:
        navPagination.Id = +obj;
        break;
      }

    this.pagination.navPagination.push(navPagination);
  }

  private Clean(){
    this.pagination.navPagination = [];
  }

}
