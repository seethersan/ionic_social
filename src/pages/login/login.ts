import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpPage } from '../signup/signup';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
    public authService: AuthServiceProvider) {
  }

  login(){
    let credentials = {
      username: this.email,
      password: this.password,
      grant_type: "password",
      client_id: 1,
      client_secret: "qGqCHd5gl3eXfpL3X8Ng6ycInc0nto6QdJERDk5V"
    };

    this.authService.login(credentials).then((result) => {
        console.log(result);
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        console.log(err);
    });
  	this.navCtrl.push(HomePage, {}, {animate: false});
  }

  launchSignup(){
    this.navCtrl.push(SignUpPage);
}
}
