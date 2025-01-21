import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, MenuController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  standalone:false,
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
param:any;
  constructor(private router:Router,private activateRoute:ActivatedRoute) {
   this.activateRoute.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;

    });
    this.param = this.router.getCurrentNavigation().extras.state;
    console.log(this.param);
 }

  ngOnInit() {
  }

}
