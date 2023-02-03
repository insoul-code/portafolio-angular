import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener('window:scroll', ['$event'])
  //   scrollHandler(event) {
  //     console.debug("Scroll Event");
  //   }

}
