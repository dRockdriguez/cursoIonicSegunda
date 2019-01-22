import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import  { Pagina2Page } from '../index.pages';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pagina2: any = Pagina2Page;
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }

  abrirMenu() {
    this.menuCtrl.toggle();
  }


}
