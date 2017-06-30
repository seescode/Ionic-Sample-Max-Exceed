import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IHasId } from '../interfaces/interfaces';
import 'rxjs/add/operator/map';
import { ProviderBase } from '../providers/providerBase';

@Injectable()
export class PageBase<T extends IHasId> {

    public entityId: number;
    public entity: T;

    constructor(public navCtrl: NavController, public navParams: NavParams, public baseProvider: ProviderBase<T>) {

        this.entityId = navParams.get('id');
        //Todo move params to const file
        let entityParam = navParams.get('entity')

        if (entityParam) {
            this.entity = entityParam;
        }

        else {
            //I dont know why but if I try to call the get method instead We do no suscribe properly
            this.baseProvider.get(this.entityId).subscribe(entity => {
                this.entity = entity;
                console.log(entity);
            });
        }
    }

    get(entityId: number) {
        this.baseProvider.get(entityId).subscribe(this.suscribeEntity)
    }

    update() {
        this.baseProvider.update(this.entity).subscribe(this.suscribeEntity)
    }

    create() {
        //TODO: Refactor suscribe to method
        this.baseProvider.create(this.entity).subscribe(this.suscribeEntity);
    }

    save() {
        if (!this.entity) {
            return;
        } 

        this.entity.id ? this.update() : this.create();
    }

    delete() {
        this.baseProvider.delete(this.entity).subscribe(result => {
            console.log(result);
        });
    }

    private suscribeEntity(entityData: T) {
        this.entity = entityData;
    }
}