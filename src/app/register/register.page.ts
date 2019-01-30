import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public name : string;
  public password : string;

  constructor( public navCtrl: NavController ) { }

  ngOnInit() {
  }

  logName() {
    if (this.password == "") {
      alert("Really? No password...?");
    } else {
      alert("Cool");
    }
    console.log(this.name)
    console.log(this.password)
  }
}