import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ChoresProvider } from '../../providers/chores/chores';
import { HomePage } from '../home/home';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
// @IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
chore_title;
amount;

  constructor(public navCtrl: NavController, public navParams: NavParams, private choresProvider: ChoresProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  AddChore(){
    this.choresProvider.createChore({'task': {'title':this.chore_title, 'value': this.amount}}).subscribe(data => {this.navCtrl.push(HomePage);});

  }

}
