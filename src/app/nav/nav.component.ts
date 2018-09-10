import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scroll(target) {
    const element = document.getElementById(target);
    element.scrollIntoView({behavior: 'smooth'});
  }
}
