import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import edit from './edit';

@Component({
  selector: 'app-levenshtein',
  templateUrl: './levenshtein.component.html',
  styles: [
    `@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

    .levenshtein {
      display: flex;
      justify-content: center;
      font-family: 'Roboto Mono', monospace;
    }

    .col {
      display: flex;
      flex-direction: column;
    }

    .char {
      width: 0.7rem;
      height: 1rem;
    }

    .char:not(.main) {
      opacity: 0.3;
    }
  `]
})
export class LevenshteinComponent implements OnInit, OnDestroy {
  @Input() words = ['horse', 'ros'];
  current = 0;
  display: string[];
  displayAbove: string[];
  displayBelow: string[];
  timeout: any;

  ngOnInit() {
    this.post();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  next() {
    const next = Math.floor(Math.random() * this.words.length);
    const moves = edit(this.words[this.current], this.words[next])
      .map(m => m.match(/^(\w+)( (.))?$/));

    for (const move of moves) {
      switch (move[1]) {
        case 'add':
          // make space in display
          this.display.splice(this.displayAbove.length, 0, ' ');
          this.displayAbove.push(move[3]);
          this.displayBelow.push('+');
          break;
        case 'replace':
          this.displayAbove.push(move[3]);
          this.displayBelow.push('~');
          break;
        case 'remove':
          this.displayAbove.push('-');
          this.displayBelow.push('-');
          break;
        case 'leave':
        default:
          this.displayAbove.push(' ');
          this.displayBelow.push(' ');
      }
    }

    this.current = next;

    this.timeout = setTimeout(() => this.post(), 500);
  }

  post() {
    this.display = [...this.words[this.current]];
    this.displayAbove = [];
    this.displayBelow = [];
    this.timeout = setTimeout(() => this.next(), 3000);
  }
}
