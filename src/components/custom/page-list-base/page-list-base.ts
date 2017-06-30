import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IHasId } from '../../../interfaces/interfaces';
import { ProviderBase } from '../../../providers/providerBase';
import { PageListConfiguration } from "../../../models/pageListConfiguration";

@Component({
  selector: 'page-list-base',
  templateUrl: 'page-list-base.html'
})
export class PageListBaseComponent<T extends IHasId> {

    @Input() detailPageType: any;
    @Input() config: PageListConfiguration
    @Input() set baseProvider(provider: ProviderBase<T>) {
        provider.getList().subscribe(entities =>  {
            this.entityList = entities;
            console.log(entities);
        });
    }

    public entityList: T[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    create() {
        if (this.config && this.config.canCreate) {
            let entity = {
                id: 666,	
                firstName: 'Nipple',
                lastName: 'dog',
                email: 'HoarseCock'}
            this.navCtrl.push(this.detailPageType, { entity });
        }
    }

    delete(id: number) {
        console.log(id);

        if(this.config && this.config.canDelete)
        {
            this.baseProvider.deleteById(id).subscribe(result => {
                console.log(result);
            });
        }
    }

    navigateToDetail(id: number) {
        this.navCtrl.push(this.detailPageType, { id })
    }
}