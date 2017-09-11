import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Item} from './item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{
    private _itemsURL = 'http://localhost:8080/items';
    private _itemURL = 'http://localhost:8080/detail';
    constructor(private http:Http){

    }
    getItems(){
        return this.http.get(this._itemsURL)
                        .map(res => <Item[]> res.json())
                        .catch(this.handleError);
    }

    getItem(id: number) {
        const url = `${this._itemURL}/${id}`;
        return this.http.get(url)
          .map(res => <Item[]> res.json())
          .catch(this.handleError);
      }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}