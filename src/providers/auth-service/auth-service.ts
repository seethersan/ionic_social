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
      this.http.post('http://104.42.189.7/oauth/token', JSON.stringify(credentials), {headers: headers}).subscribe(res => { 
        let data = res.json();
        let token_type = data['token_type'];
        this.token = token_type.concat(" ", data['access_token']);
        this.storage.set('token', this.token);
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
