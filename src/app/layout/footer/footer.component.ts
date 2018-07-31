import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'boeing-footer';
  constructor() { }

  ngOnInit() {
  }
}
