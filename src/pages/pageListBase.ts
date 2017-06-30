import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IHasId } from '../interfaces/interfaces';
import 'rxjs/add/operator/map';
import { ProviderBase } from '../providers/providerBase';

@Injectable()
export class PageListBase<T extends IHasId> {

    public entityList: T[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public baseProvider: ProviderBase<T>, public detailPageImport: any) {

        baseProvider.getList().subscribe(entities => {
            this.entityList = entities;
            console.log(entities);
        });
    }

    delete(id: number) {
        console.log(id);
        //this.baseProvider.deleteById(id).subscribe(result => {
        //    console.log(result);
        //});
    }

    navigateToDetail(id: number) {
        this.navCtrl.push(this.detailPageImport, { id })
    }
}