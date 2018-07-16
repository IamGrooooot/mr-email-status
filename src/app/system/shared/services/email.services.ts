import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseApi } from "../../../shared/core/base-api";
import { Observable } from "rxjs";

@Injectable()
export class EmailService extends BaseApi{

  constructor(
    public httpClient: HttpClient
  ){
    super(httpClient)
  }

  getEmail(url: string) : Observable<any>{
    return this.get(url);
  }

  postEmail() : Observable<any>{
    return this.post('EmailMessage', {});
  }

  updateBufMessage(isnMessage: string) : Observable<any>{
    return this.post('', isnMessage);
  }
}