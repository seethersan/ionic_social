import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaisServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisServiceProvider {

  constructor(public http: HttpClient) {}

  getPaises(){
  	return this.http.get('http://192.168.1.34:9000/api/pais');
  }

}
