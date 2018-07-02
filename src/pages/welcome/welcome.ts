import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
  	public navCtrl: NavController) {
  }

  login(){
  	this.navCtrl.setRoot(LoginPage);
  }

  signup(){
  	this.navCtrl.setRoot(SignUpPage);
  }

  
}
