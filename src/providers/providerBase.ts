import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IHasId } from '../interfaces/interfaces';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProviderBase<T extends IHasId> {

    apiUrl = '';
    route: string;

    constructor(public http: Http, public routeName: string) {
        this.route = routeName;
    }

    get(id: number): Observable<T> {
        return this.http.get(`${this.apiUrl}/${this.route}/${id}`).map(res => <T>res.json());
    }

    getList(): Observable<T[]> {
        return this.http.get(`${this.apiUrl}/${this.route}`).map(res => <T[]>res.json());
    }

    create(resource: T): Observable<T> {
        var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(`${this.apiUrl}/${this.route}`, resource, {
            headers: headers
        }).map(res => <T>res.json());
    }

    update(resource: T): Observable<T> {
        var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(`${this.apiUrl}/${this.route}/${resource.id}`, resource, {
            headers: headers
        }).map(res => <T>res.json());
    }

    delete(resource: T): Observable<boolean> {
        return this.deleteById(resource.id);
    }

    deleteById(id: number): Observable<boolean> {
        var headers = new Headers();

        return this.http.delete(`${this.apiUrl}/${this.route}/${id}`, {
            headers: headers
        }).map(res => <boolean>res.json());
    }
}