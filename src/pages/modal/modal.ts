import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.nombre = navParams.get('nombre');
  }

  cerrarConParametros() {
    let data = {
      nombre: 'asdf',
      edad: 18
    }
    this.viewCtrl.dismiss(data);
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
