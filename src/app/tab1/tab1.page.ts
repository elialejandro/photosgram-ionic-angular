import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {}

  tabCamara() {
    console.log('ir a tab2');
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  ngOnInit() {
    // this.authService.login('dixie.buckridge@example.com', 'password');
  }

}
