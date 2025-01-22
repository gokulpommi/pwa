import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, MenuController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  standalone:false,
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
param:any;
myImage:any;
position: Position | null = null;
  constructor(private router:Router,private activateRoute:ActivatedRoute) {



   this.activateRoute.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation()?.extras?.state;

    });
    this.param = this.router.getCurrentNavigation()?.extras?.state;
    console.log(this.param);
 }

  ngOnInit() {
 
  }


  async getpic(){


      const camera = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true
      });

      this.myImage = camera.webPath;

      console.log(camera);
      let data = camera.dataUrl;
      console.log(data);
  }


   async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.position = coordinates;
  }

  async share() {
    await Share.share({
      title: 'Come and find me',
      text: `Here's my current location: 
        ${this.position?.coords?.latitude}, 
        ${this.position?.coords?.longitude}`,
      url: 'http://ionicacademy.com/'
    });
  }

}
