import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoresProvider } from '../../providers/chores/chores';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chores: any[];

  constructor(public navCtrl: NavController, private choresProvider: ChoresProvider) {
    this.choresProvider.getChores().subscribe(result => (this.chores = result.data));

    console.log(this.chores);
    // this.chores = [
    //     {'id': 1,
    //     'title': 'aufräumen',
    //     'reward':'2.6',
    //     'state' : 'open'
    //     },
    //     {
    //     'id': 2,
    //     'title': 'putzen',
    //     'reward':'2.6',
    //     'state': 'done'
    //     },
    //     {'id': 3,
    //     'title': 'spülen',
    //     'reward':'2.2',
    //     'state' : 'inrev'
    //     },
    //
    //   ]



    }

    choreDone(id:number){

    }


}
