import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-typer',
  template: '{{ text }}<span class="cursor">|</span>',
  styles: [
    '@keyframes flash {from {opacity: 1} to {opacity: 0}}',
    '.cursor { animation: flash 0.5s infinite alternate; }',
    ':host { user-select: none; }'
  ]
})
export class TyperComponent implements OnInit, OnDestroy {
  @Input() words = [
    'This',
    'rotates',
    'through',
    'different',
    'words.',
  ];
  @Input() speed = 0;
  word = 0;
  char = 0;
  dir = true;
  text = '';
  cursor = '|';
  /**
   * Stores the interval object from the animate method to be cleared on
   * component destruction.
   */
  timeout: any;

  constructor() {
    this.nextChar = this.nextChar.bind(this);
    this.speed = 1 - Math.max(0, Math.min(0.99, this.speed / 100));
  }

  ngOnDestroy() {
    clearInterval(this.timeout);
  }

  ngOnInit() {
    this.animate();
  }

  /**
   * Increments the state of the typer with nextChar, and sets the same function
   * to run again with a timeout - with a delay specified by the nextFrame
   * method
   */
  animate() {
    const delay = this.nextChar();
    this.timeout = setTimeout(() => this.animate(), this.speed * delay);
  }

  /**
   * Adds the next or removes the last character, and returns a number
   * coressponding to the amount of time that should be waited until the next
   * frame.
   *
   * @returns recommended delay time
   */
  nextChar() {
    let delay: number;
    // where in the process are we?
    if (this.dir) {
      // add the next character
      this.char++;
      if (this.char === this.words[this.word].length) {
        this.dir = false;
        delay = 500;
      } else {
        delay = 100 + Math.floor(Math.random() * 100);
      }
    } else {
      // remove the last character
      this.char--;
      if (this.char === 0) {
        this.dir = true;
        this.word = (this.word + 1) % this.words.length;
        delay = 300;
      } else {
        delay = 80;
      }
    }

    this.text = this.words[this.word].substring(0, this.char);

    return delay;
  }
}
