import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(0);
  }

  mostrarModal(){
    let modal = this.modalCtrl.create(ModalPage, { nombre: "David" });
    modal.present();

    modal.onDidDismiss(parametros => {
      if (parametros){
        console.log(parametros)
      }
    });
  }

}
