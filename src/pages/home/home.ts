import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personas: any;
  responseData: any;

  userPostData = {"user_id":"","token":""};


  constructor(
    public http: Http,
    public navCtrl: NavController,
  	public app: App, 
    public authService: AuthServiceProvider) {
  }

  ionViewDidLoad(){
 
    this.getPersonas().then((data) => {
          this.personas = data;
    }, (err) => {
        console.log("not allowed");
    });
 
  }

  getPersonas(){
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', this.authService.token);

      console.log(headers);
 
      this.http.get('http://104.42.189.7/api/persona', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(){
  	this.navCtrl.setRoot(LoginPage);
  }

  logout(){
        // Remove API token 
        this.authService.logout();
        this.navCtrl.setRoot(LoginPage);
  }

  
}
