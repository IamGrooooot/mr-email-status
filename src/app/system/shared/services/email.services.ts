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
    return this.httpClient.get(url);
  }

  postEmail(url: string) : Observable<any>{
    return this.httpClient.post(url, {});
  }

  updateBufMessage(isnMessage: string) : Observable<any>{
    return this.httpClient.post('', isnMessage);
  }
}