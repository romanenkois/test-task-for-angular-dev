import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  navBarLinks = [
    { text: 'link 1', href: '#' },
    { text: 'link 2', href: '#' },
    { text: 'link 3', href: '#' },
    { text: 'link 4', href: '#' },
  ];

  footerLinks = [
    { text: 'link 1', href: '#' },
    { text: 'link 2', href: '#' },
    { text: 'link 3', href: '#' },
    { text: 'link 4', href: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
