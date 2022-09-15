import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'trafik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  title = 'trafik-mitterlehner';
  pageMode = 'DEFAULT';
  isStartup = true;

  constructor(private router: Router
            , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: {[pageMode: string]: any}) => {
      this.pageMode = event.pageMode;

      if(event.pageMode === 'LANDING') {
        window.addEventListener('scroll', () => this.setScrollSettings());
        this.setScrollSettings();
      } else {
        window.removeEventListener('scroll', () => this.setScrollSettings());
        this.isStartup = true;
      }
    });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  setScrollSettings(): void {
    const pos = window.scrollY;

    if(this.pageMode !== 'LANDING') {
      this.isStartup = true;
      return;
    }

    if(pos === 0) {
      this.isStartup = false;
    } else {
      this.isStartup = true;
    }
  }
}

export enum PageModes {
  Default = 'DEFAULT',
  Landing = 'LANDING'
}