import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutante = navParams.get('mutante');
  }

  atras() {
    this.navCtrl.pop();
  }

  irRoot() {
    this.navCtrl.popToRoot();
  }
}
