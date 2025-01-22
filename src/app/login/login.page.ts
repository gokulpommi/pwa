import { Component, OnInit } from '@angular/core';
import { Platform,ModalController, NavController,AlertController,ToastController,LoadingController} from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';


interface PresetValue {
  [key: string]: any; 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone:false,
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:any;
password:any;
userDetails:PresetValue={};
  constructor(private navCtrl:NavController,private http:HttpClient) { }

  ngOnInit() {  }

  onLogin() {

  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data:any)=>{
    console.log(data);
  });
  if (this.username && this.password) {
    console.log('Username:', this.username, 'Password:', this.password);
    this.userDetails['username'] = this.username;
    this.userDetails['password'] = this.password;
    
    // Add login logic here
    this.navCtrl.navigateForward('/menu',{state:this.userDetails})
  } else {
    console.error('Please enter username and password.');
  }
}

onForgotPassword() {
  // Navigate to the forgot password page
}

onRegister() {
  // Navigate to the registration page
}


}
