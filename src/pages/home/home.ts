import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoresProvider } from '../../providers/chores/chores';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chords: any[];

  constructor(public navCtrl: NavController, private choresProvider: ChoresProvider) {
    //this.choresProvider.query().subscribe(result => (this.cardItems = result, this.cardItemsLength = result.length));
  }

}
