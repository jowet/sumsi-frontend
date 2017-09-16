import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoresProvider } from '../../providers/chores/chores';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chores: any[];
  balance: any;


  constructor(public navCtrl: NavController, private choresProvider: ChoresProvider) {
    // console.log(this.chores);
    // self=this;
    this.loadData();
    // console.log('balance'+this.balance);
    }

    markAsDone(id:any){
      this.choresProvider.updateChore(id, {'task': {'state':'closed'}}).subscribe(data => {this.loadData()});
    }


    loadData(){
      this.choresProvider.getChores().subscribe(result => (this.chores = result.data));
      this.choresProvider.getLedger().subscribe(result => (this.balance = result.data.attributes.balance));
    }

}
