import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChoresProvider {

  constructor(public http: Http) {
    console.log('Hello ChoresProvider Provider');
  }


  getChores(){
    //TODO return chores from AWS Backend
    //return  


  }

}
