import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class SearchService
{
    private searchSource = new BehaviorSubject<string>("");
    currentSearch = this.searchSource.asObservable();

    changeSearch(str: string) {
      this.searchSource.next(str);
    }
}
