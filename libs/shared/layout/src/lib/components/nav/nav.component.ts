import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  isOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => this.isOpen = false)
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
