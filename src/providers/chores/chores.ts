import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the ChoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChoresProvider {

apiString: string;

// status:

  constructor(public http: Http) {
    this.apiString = "http://sumsiapi-env.n2eirghx2d.eu-central-1.elasticbeanstalk.com/api/ledgers/1";
  }

  postChore(id: number, title: string, reward: any){
    return this.http.get(this.apiString);
//ledger = 5


  }

  getChores(){
    return this.http.get(this.apiString+'/tasks').map(resp => resp.json());
  }

  getLedger(){
    return this.http.get(this.apiString).map(resp => resp.json());
  }

  updateChore(id, obj){
    let headers = new Headers({ 'Content-Type': 'application/json', 'accept': 'application/json' })
    let options = new RequestOptions({headers: headers});

    return this.http.patch(this.apiString+'/tasks/'+id,JSON.stringify(obj), options).map(resp => resp.json());
  }

  createChore(obj){
    let headers = new Headers({ 'Content-Type': 'application/json', 'accept': 'application/json' })
    let options = new RequestOptions({headers: headers});


    return this.http.post(this.apiString+'/tasks',JSON.stringify(obj), options).map(resp => resp.json());
  }


}
