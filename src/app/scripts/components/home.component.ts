import {AfterViewInit, Component} from '@angular/core';
import {TweenLite} from 'gsap';

@Component({
  templateUrl: '../../views/home.html'
})
export class HomeComponent implements AfterViewInit{
  title = 'Home page!';
  scene: HTMLElement;
  parallaxInstance: any;
  asteroid: any;
  planet: any;
  krk: any;
  ship: any;

  ngAfterViewInit() {
    this.scene = document.getElementById('scene');
    this.parallaxInstance = new Parallax(this.scene);

    this.asteroid = document.getElementById('asteroid');
    TweenLite.to(this.asteroid, 0.7, {left: '7vw' , top: '43vh' });

    this.planet = document.getElementById('planet');
    TweenLite.to(this.planet, 0.7, {left: '-60vw' , top: '43vh' });

    this.krk = document.getElementById('krk');
    TweenLite.to(this.krk, 0.5, {top: '-100vh', delay: 0.7 });

    this.ship = document.getElementById('ship');
    TweenLite.to(this.ship, 0.5, {top: '-100vh', delay: 0.7 });
  };
}
