import {AfterViewInit, Component, HostListener, Input} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'cl-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(300, style({opacity: 0.5}))
      ]),
      transition(':leave', [
        animate(300, style({opacity: 0}))
      ])
    ])
  ]
})
export class BackTopComponent implements AfterViewInit {

  @Input() position = 400;
  moveSpeed = 400;
  visibility = false;

  ngAfterViewInit() {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    const scrollStep = -window.scrollY / (this.moveSpeed / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    this.visibility = window.scrollY > this.position;
  }

}
