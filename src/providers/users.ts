import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { ProviderBase } from './providerBase'

@Injectable()
export class Users extends ProviderBase<User>  {
    constructor(public http: Http) {
        super(http, 'users');
  }
}