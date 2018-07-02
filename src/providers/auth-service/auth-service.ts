import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public token: any;

  constructor(public http: Http, 
    public storage: Storage) {
  }

  login(credentials){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://192.168.1.34:9000/oauth/token', JSON.stringify(credentials), {headers: headers}).subscribe(res => { 
        let data = res.json();
        this.token = data.token;
        this.storage.set('token', data.token);
        resolve(data);

        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    })    
  }

  logout(){
    this.storage.set('token', '');
  }
}
