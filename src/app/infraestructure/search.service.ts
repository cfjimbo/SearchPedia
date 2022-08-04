import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Search } from "src/app/models/search";
import { SearchGateway } from "src/app/models/gateway/gateway-search";

@Injectable({
    providedIn:'root'
})
export class SearchService extends SearchGateway{
      
    private _url ='https://api.dbpedia-spotlight.org/en/annotate?confidence=0.8&text=';
    constructor(private http:HttpClient){super();}
    getAllSearch(): Observable<Search[]> {
      const headers = new HttpHeaders({
          'Content-Type': 'text/plain',
        });
      const requestOptions = { headers: headers };
      return this.http.get<Search[]>(this._url,requestOptions)
    }
}
