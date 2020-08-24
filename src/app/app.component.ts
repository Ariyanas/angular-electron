import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Electron Timer';
  max = 1;
  current = 0;

  start() {
    interval(100)
      .pipe(takeWhile((_) => !this.isFinished))
      .subscribe((i: number) => {
        this.current += 0.1;
      });
  }

  finish() {
    this.current = this.max;
  }

  reset() {
    this.current = 0;
  }

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
