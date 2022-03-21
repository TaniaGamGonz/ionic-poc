/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  serverResponse;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private navCtrl: NavController,
    private alertController: AlertController,
  ) { 
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  async presentAlert(resMessage) {
    const alert = await this.alertController.create({
      header: 'Error en el login',
      message: resMessage,
      buttons: ['OK']
    });
    await alert.present();
  }


  ngOnInit() {
  }
  loginUser({user, password}){
    this.loginService.signIn(user, password).subscribe(((response: any) =>{
      if(response.error === 0){
        this.navCtrl.navigateForward('/home');
      }else{
       this.presentAlert(response.message);
      }
    }));
      
    
  }

}
