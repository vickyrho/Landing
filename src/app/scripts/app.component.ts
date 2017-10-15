import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from './services/mainService';
import {ConfigService} from './services/configService';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../css/app.component.css'],
  providers: [ConfigService, MainService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router,
              private mainService: MainService) {
    router.navigateByUrl('/home');
    /*this.mainService.SampleAPI().subscribe(responseData => {
      console.log(responseData);
    }, errorData => {

    });*/
  }

  gotoPage= function (route) {
    this.router.navigateByUrl(route);
  };
}
