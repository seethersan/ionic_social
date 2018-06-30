import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { PaisServiceProvider } from '../../providers/pais-service/pais-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
	countries:any = [];
	data:any = {};

	constructor(public navCtrl: NavController,
  	public paisService: PaisServiceProvider,
  	public http: Http) {
  		this.data.firstname = "";
  		this.data.lastname = "";
  		this.data.email = "";
  		this.data.password = "";
  		this.data.gender = "";
  		this.data.birthday = "";
  		this.data.city = "";
  		this.data.country = "";

  		this.http = http;
	}

	ionViewDidLoad(){
		this.paisService.getPaises().subscribe(
			(data) => {
				this.countries = data;
			},
			(error) => {
				console.error(error);
			}
		)
	}

	submit(){
		var link = "http://192.168.1.34:9000/api/persona";
		var myData = JSON.stringify({
			firstname: this.data.firstname,
			lastname: this.data.lastname,
			email: this.data.email,
			password: this.data.password,
			gender: this.data.gender,
			city: this.data.city,
			pais: this.data.country,
			birthdate: this.data.birthday
		})
		this.http.post(link, myData).subscribe(
			(data) => {
				alert("Profile created");
			},
			(error) => {
				console.error(error);
			})
	};
}
