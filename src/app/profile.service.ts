import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Profile} from './profile';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
    private _createprofileURL = 'http://localhost:8080/create_profile';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http){

    }
      create(profile: Profile) {
        return this.http.post(this._createprofileURL, profile, { 
        })
       .map(res =>  res.json());
      }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}