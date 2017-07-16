import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imgSrc = {
    logo : 'assets/images/logo_zxc.png',
    blogFeature : 'assets/images/keyboard.jpg',
    shopFeature : 'assets/images/logo_zxc.png',
    designFeature : 'assets/images/webDesign.jpg',
  };
}
