import {Component, OnInit} from '@angular/core';
import {environment} from './../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const afterSlashChars = document.location.href.match(/\/([^\/]+)\/?$/)[1];
  }

  scroll(target) {
    const element = document.getElementById(target);
    element.scrollIntoView({behavior: 'smooth'});
  }

  navigateTo(path) {
    const newLocation = environment.location + path;
    window.location.href = newLocation;
  }
}
