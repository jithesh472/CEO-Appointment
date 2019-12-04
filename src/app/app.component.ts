import { Component, Inject } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  
  appitems = [
    
    {
      label: 'CEO Appointments',
      icon: 'group',
      items: [
        {
          label: 'Calendar',
          link: '/appointment/home',
          externalRedirect: true,
          icon: 'calendar_today'
        },
        {
          label: 'Pending Requests',
          link: '/appointment/accept',
          externalRedirect: true,
          icon: 'assignment_returned'
        },
        {
          label: 'Rejected Requests',
          link: '/appointment/reject',
          externalRedirect: true,
          icon: 'assignment_returned'
        }
      ]
    },
    {
      label: 'Book Conference Room',
      icon: 'ballot',
      items: [
        {
          label: 'Calendar',
          link: '/booking/home',
          externalRedirect: true,
          icon: 'calendar_today '          
        },
        {
          label: 'Pending Requests',
          icon: 'assignment_returned',
          link: '/booking/pending',
          externalRedirect: true,
        },
        {
          label: 'Book Conference Room',
          link: '/booking/home',
          externalRedirect: true,
          icon: 'book'
        }
      ]
    }
  ];
  
  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: '#3880ff',
    fontColor: 'rgb(255, 255, 255)',
    backgroundColor: '#3880ff',
    selectedListFontColor: 'black',
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
    interfaceWithRoute: true
  };


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
