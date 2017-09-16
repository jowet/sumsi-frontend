import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
    this.apiString = "http://sumsi-api.eu-central-1.elasticbeanstalk.com/api/ledgers/1";
  }

  postChore(id: number, title: string, reward: any){
    return this.http.get(this.apiString);
//ledger = 5


  }

  getChores(){
    return this.http.get(this.apiString+'/tasks').map(resp => resp.json());
  }

}
