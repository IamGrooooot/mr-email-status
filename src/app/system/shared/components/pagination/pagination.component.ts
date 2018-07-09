import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessageInboxActive } from '../../interface/message.interfase';
import { IPagination } from '../../interface/pagination.interface';

@Component({
  selector: 'mr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input() message: IMessageInboxActive[];
  @Input() pagination: IPagination;
  // Работа с URL
  pageId: string;
  pageNum: string;
  countMessage: number;

  countNavPagination: number;
  navPagination: string[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = this.route.snapshot.params['page'];
      this.pageNum = this.route.snapshot.params['id'];
      this.countMessage = this.pagination.countMessage;
      this.countNavPagination = Math.ceil(this.countMessage / this.pagination.onPageCountMessage);
      this.CreateNav(this.countNavPagination);
      console.log(this.navPagination);
    })
  }

  private CreateNav(i: number){
    this.navPagination = [];
    if (i < 8){
      for(let n = 1; n <= i; n++ )
      {
        this.navPagination.push(n.toString());
      }
    }
    if (i > 7){
      this.navPagination.push("<", "1");
      if (+this.pageNum < 5){
        for(let n = 2; n < 6; n++ )
        {
          this.navPagination.push(n.toString());
        }
        this.navPagination.push("...");
      }
      else if(i - +this.pageNum <= 3){
        this.navPagination.push("...");
        for(let n = i - 4; n <= i - 1; n++ )
        {
          this.navPagination.push(n.toString());
        }
      }
      else{
        this.navPagination.push("...");
        for(let n = +this.pageNum - 1; n <= +this.pageNum + 1; n++ )
        {
          this.navPagination.push(n.toString());
        }
        this.navPagination.push("...");
      }
      this.navPagination.push(this.countNavPagination.toString(), ">");
    }
  }

}
