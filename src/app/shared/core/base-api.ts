import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class BaseApi{
  private readonly baseApi: string = 'http://localhost/mremail/MREmailStatus/Services/EmailParse.asmx/';

  constructor(
    public httpClient: HttpClient
  ){}

  private getUrl(url: string = ''): string {
    return this.baseApi + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.httpClient.get<any>(this.getUrl(url));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.post<any>(this.getUrl(url), data);
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.put<any>(this.getUrl(url), data);
  }
}