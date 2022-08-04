import { Observable } from "rxjs";
import { Search } from "../search";

export abstract class SearchGateway {
    abstract getAllSearch():Observable<Search[]>;
}