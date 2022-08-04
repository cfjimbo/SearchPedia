import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchGateway } from "src/app/models/gateway/gateway-search";
import { Search } from "../models/search";

@Injectable({
    providedIn: 'root'
})

export class GetSearchUseCases{
    constructor(private _searchGateway: SearchGateway){}
    
    getAllRooms(): Observable <Search[]>{
        return this._searchGateway.getAllSearch();
    }
}