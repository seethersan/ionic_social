import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController,
  	public app: App) {
  }

  login(){
  	this.navCtrl.setRoot(LoginPage);
  }

  logout(){
        // Remove API token 
        const root = this.app.getRootNav();
        root.popToRoot();
  }

  
}
