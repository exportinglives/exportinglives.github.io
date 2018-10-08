import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css'],
})
export class DocumentaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const path = document.location.href.match(/\/([^\/]+)\/?$/)[1] || 'pt';
    const closedCaptionsDefault = path === 'en' ? 1 : 0;
    // tslint:disable-next-line:max-line-length
    const newSrc = `https://www.youtube.com/embed/7ZXclVQC008?rel=0&amp;showinfo=0&amp;cc_lang_pref=${path}&amp;cc_load_policy=${closedCaptionsDefault}`;
    (<HTMLIFrameElement>document.getElementById('ytIframe')).src = newSrc;
  }
}
