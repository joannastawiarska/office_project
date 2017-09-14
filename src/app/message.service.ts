import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Message } from './message';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

    private _returnOwnerURL = 'http://localhost:8080/return';
    constructor(private http: Http) {

    }
    returnToOwner(message: Message) {
        return this.http.post(this._returnOwnerURL, message, {
        })
            .map(res => res.json());
    }
}